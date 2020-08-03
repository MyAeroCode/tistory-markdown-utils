import { ProcessMode } from "../process-mode";

/**
 * BR 태그를 복구를 복구 한 뒤,
 * 이미지 치환자를 변환하는 모드.
 */
export const COMPLEX = new ProcessMode({
    name: "Complex",
    process: (context) => {
        return `[${context.docsTitle}] COMPLEX \n${context.inputText}\n`;
    },
});
