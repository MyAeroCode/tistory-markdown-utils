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

    constructor(args: ProcessModeConstructorArgs) {
        this.name = args.name;
        this.process = args.process;
    }
}
