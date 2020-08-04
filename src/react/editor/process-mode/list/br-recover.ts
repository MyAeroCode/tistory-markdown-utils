import { ProcessMode } from "../process-mode";

/**
 * BR 태그를 복구하는 모드
 */
export const BR_RECOVER = new ProcessMode({
    name: "BR_RECOVER",
    process: ({ inputText }) => {
        const lineBreak = `\n\n<br/>`;

        /**
         * [규칙]
         *    N개의 '#'으로 시작하는 라인을 N레벨 이라고 정의합니다.
         *    최대 3레벨 까지만 있습니다.
         *
         *    [페이지 규칙]
         *    1-1. 페이지에 헤더는 주지 않는다.
         *    1-2. 페이지에 푸터는 주지 않는다.
         *
         *    [1레벨 제목 규칙]
         *    2-1. 1레벨 제목은 인용 문법이 강제로 적용되어야 한다.
         *    2-2. 1레벨 제목만 인용 문법이 허용된다.
         *
         *    [다른 레벨 간 규칙]
         *    3-1. 상위 레벨에 텍스트가 없는 경우, 하위 레벨과 붙여쓴다.
         *    3-2. 상위 레벨에 텍스트가 있는 경우, 하위 레벨과 띄어쓴다.
         *
         *    [같은 레벨 내 규칙]
         *    4-1. 같은 레벨 내, 각 텍스트 문단 사이는 띄어쓴다.
         *    4-2. 같은 레벨 내, 리스트의 위는 텍스트가 있더라도 붙여쓰고 아래는 띄어쓴다.
         *    4-3. 같은 레벨 내, 이미지와 코드는 위아래에 제목을 제외한 무엇과도 붙여쓴다.
         *    4-4. 코드블럭 내용은 이스케이프한다.
         */

        //
        // [전처리 - 1]
        // 코드블럭을 추출한다.
        const codeBlocksVal = inputText.match(/^```(.|\n)*?```$/gm);
        const codeBlocksCnt = codeBlocksVal !== null ? codeBlocksVal.length : 0;
        let codeBlockStack: string[] = [];
        if (codeBlocksCnt) {
            if (codeBlocksVal) {
                for (let i = 0; i < codeBlocksCnt; i++) {
                    inputText = inputText.replace(
                        codeBlocksVal[i],
                        `%%%CODE_BLOCK%%%`
                    );
                    codeBlockStack.push(codeBlocksVal[i]);
                }
            } else {
                throw new Error(
                    `코드블럭의 예상개수와 실제개수가 일치하지 않습니다.`
                );
            }
        }

        //
        // [전처리 - 2]
        // 1. 의미있는 행만 추출한다.
        // 2  각 라인의 불필요한 뒤쪽 공백을 제거한다.
        // 3. 모든 레벨의 제목에 적용된 인용을 전부 제거한다.
        // 4. 각 라인의 상세정보를 파싱한다.
        let tokens = inputText
            .split(/\n+/g)
            .map((line) => {
                //
                // 불필요한 뒤쪽 공백을 전부 제거한다.
                line = line.trimRight();

                //
                // 인용이 적용된 제목이라면 인용을 제거한다.
                if (line.startsWith("> #")) {
                    line = line.substr(2);
                }

                //
                // 코드블럭에 포함된 내용은 이스케이프한다.
                let tag = parseLine(line);

                //
                // 각 라인의 상세정보를 파싱한다.
                return { line, tag };
            })
            .filter((line) => line);

        //
        // 규칙을 적용한다.
        if (2 <= tokens.length) {
            for (let i = 0; i < tokens.length - 1; i++) {
                //
                // 1레벨 제목에만 인용문을 붙인다.
                if (
                    tokens[i].tag === Tag.TITLE &&
                    getTitleLevel(tokens[i].line) === 1
                ) {
                    tokens[i].line = `> ${tokens[i].line}`;
                }

                //
                // 상위 레벨에 내용이 있는 경우,
                // 하위 레벨과 띄어쓴다.
                if (
                    tokens[i].tag !== Tag.TITLE &&
                    tokens[i + 1].tag === Tag.TITLE
                ) {
                    tokens[i].line += lineBreak;
                }

                //
                // (텍스트 또는 리스트)와 다음 텍스트 사이는 띄어쓴다.
                if (
                    (tokens[i].tag === Tag.TEXT ||
                        tokens[i].tag === Tag.LIST) &&
                    tokens[i + 1].tag === Tag.TEXT
                ) {
                    tokens[i].line += lineBreak;
                }

                //
                // 끝에 개행을 붙인다.
                // 단, 리스트와 다음 리스트 사이에는 개행이 붙으면 안된다.
                if (
                    tokens[i].tag === Tag.LIST &&
                    tokens[i + 1].tag === Tag.LIST
                ) {
                    tokens[i].line += `\n`;
                } else {
                    tokens[i].line += `\n\n`;
                }
            }
        }

        //
        // 코드 블럭을 복구한다.
        for (let i = 0; i < tokens.length; i++) {
            //
            // 코드블럭인 경우 복구한다.
            if (tokens[i].tag === Tag.CODE) {
                const thisCodeBlock = codeBlockStack.shift();
                if (thisCodeBlock === undefined) {
                    throw new Error(`코드블럭의 개수가 부족합니다.`);
                }
                tokens[i].line = thisCodeBlock;
            }
        }

        return tokens.map((token) => token.line).join("");
    },
});

enum Tag {
    TITLE = 1,
    TEXT,
    CODE,
    IMAGE,
    TABLE,
    LIST,
    HORIZEN,
    LINE_BREAK,
}

function parseLine(line: string): Tag {
    //
    // 제목인지 검사한다.
    if (/#+ /.test(line)) {
        return Tag.TITLE;
    }
    if (/^#+/.test(line)) {
        throw new Error(`타이틀 태그의 내용이 비어있습니다. where : \n${line}`);
    }

    //
    // 코드블럭인지 검사한다.
    if (line === `%%%CODE_BLOCK%%%`) {
        return Tag.CODE;
    }

    //
    // 리스트인지 검사한다.
    if (/^ *[+*-] .*?$/.test(line) || /^[1-9][0-9]*\. .*?$/.test(line)) {
        return Tag.LIST;
    }

    //
    // 이미지인지 검사한다.
    if (
        //
        // 링크 없는 이미지
        /^!\[\.*?\]\(.*?\)$/.test(line) ||
        //
        // 링크 있는 이미지
        /^\[!\[.*?\]\(.*?\)\]\(.*?\)$/.test(line)
    ) {
        return Tag.IMAGE;
    }

    //
    // 테이블인지 검사한다.
    if (/^\|([^\|\n]*\|)+$/.test(line)) {
        return Tag.TABLE;
    }

    //
    // 수평선인지 검사한다.
    if (line === "---" || line === "***" || line === "___") {
        return Tag.HORIZEN;
    }

    //
    // br 태그인지 검사한다.
    if (line === "<br/>" || line === "<br />") {
        return Tag.LINE_BREAK;
    }

    //
    // 그 외의 경우.
    return Tag.TEXT;
}

/**
 * 제목 태그의 레벨을 추출한다.
 */
function getTitleLevel(title: string): 1 | 2 | 3 {
    //
    // 유효한 제목 태그.
    if (/#+ /.test(title)) {
        // #으로 이루어진 prefix를 가져온다.
        const prefix = /^#+/.exec(title);
        if (prefix === null) {
            throw new Error(
                `정규식 검사는 통과했지만, prefix를 가져올 수 없었습니다.`
            );
        }

        //
        // #의 개수를 가져오고,
        // 1~3 사이인지 검사한다.
        const level = prefix[0].length;
        if (level <= 0 || 4 <= level) {
            throw new Error(`${level} 레벨의 제목태그는 허용하지 않습니다.`);
        }

        return level as 1 | 2 | 3;
    }
    //
    // 내용이 비어있는 제목 태그.
    else if (/^#+/.test(title)) {
        throw new Error(`타이틀 태그의 내용이 비어있습니다.`);
    }
    //
    // 제목 태그가 아님.
    else {
        throw new Error(`타이틀 태그가 아닙니다.`);
    }
}
