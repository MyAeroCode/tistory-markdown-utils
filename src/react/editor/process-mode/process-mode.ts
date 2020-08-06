import { EditorContext } from "..";

/**
 * 프로세스 구현 함수
 */
export type ProcessImpl = (context: EditorContext) => string;

/**
 * 프로세스 모드 생성자에 필요한 인자
 */
export interface ProcessModeConstructorArgs {
    name: string;

    process: ProcessImpl;
}

/**
 * 프로세스 모드
 */
export class ProcessMode {
    /**
     * 프로세스 모드의 이름
     */
    readonly name: string;

    /**
     * 프로세스 로직
     */
    readonly process: ProcessImpl;

    /**
     * 문맥의 각 필드에 존재하는 불필요한 앞뒤 공백을 제거.
     */
    private trimCtx(ctx: EditorContext): EditorContext {
        const cleaned = Object.assign({}, ctx);
        cleaned.docsTitle = cleaned.docsTitle.trim();
        cleaned.inputText = cleaned.inputText.trim();
        return cleaned;
    }

    constructor(args: ProcessModeConstructorArgs) {
        this.name = args.name;
        this.process = (ctx: EditorContext) => {
            return args.process(this.trimCtx(ctx));
        };
    }
}
