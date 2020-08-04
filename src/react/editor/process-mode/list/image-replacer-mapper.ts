import { ProcessMode } from "../process-mode";

/**
 * 티스토리 이미지 치환자를 변환하는 모드
 */
export const IMAGE_REPLACER_MAPPER = new ProcessMode({
    name: "IMAGE_REPLACER_MAPPER",

    process: ({ docsTitle, inputText }) => {
        /**
         * 변환된 치환자 목록
         * 중복 여부를 가려내기 위해 사용합니다.
         */
        const changedImageSet = new Set<string>();

        /**
         * 중복된 이미지 목록
         *   K : 행 번호
         *   V : 이미지 치환자
         */
        const duplicatedImageMap = new Map<number, string>();

        /**
         * 숫자를 두 자리 문자열로 변환한다.
         */
        function formatNumber(num: number): string {
            return (num < 10 ? "0" : "") + num;
        }

        /**
         * 이미지 치환자 정규식
         */
        const imageReplaceRegex = /^\[\#\#_.+?_\#\#]$/gim;

        /**
         * 이미지 순번
         */
        let idx = 0;

        //
        // 문서 내용을 줄 단위로 쪼갠 뒤, 발견된 이미지 치환자를 모두 변경하고, 다시 합친다.
        const result = inputText
            .split("\n")
            .map((line, lineIdx) => {
                //
                // 앞 뒤의 불필요한 뒷 공백을 제거한다.
                line = line.trimRight();

                //
                // 해당 라인이 이미지 치환자인지 검사한다.
                if (imageReplaceRegex.test(line)) {
                    if (changedImageSet.has(line)) {
                        //
                        // 중복된 이미지
                        duplicatedImageMap.set(lineIdx, line);
                    } else {
                        //
                        // 중복된 이미지가 아니라면 image 경로를 가르키도록 변경한다.
                        const filename = `${docsTitle}-${formatNumber(
                            idx++
                        )}.png`;
                        changedImageSet.add(line);
                        return `![](./images/${filename})`;
                    }
                } else {
                    //
                    // 아니라면 가만히 냅둔다.
                    return line;
                }
            })
            .join("\n");

        //
        // 중복된 이미지가 있었는지 검사한다.
        if (duplicatedImageMap.size) {
            const duplicatedImages = Array.from(duplicatedImageMap.entries());
            const errorMessage = `중복된 이미지가 존재합니다.\n${duplicatedImages
                .map((e) => {
                    const lineIdx = e[0];
                    const rep = e[1];
                    return `${lineIdx} line : ${rep}`;
                })
                .join("\n")}`;
            throw new Error(errorMessage);
        }
        return result;
    },
});
