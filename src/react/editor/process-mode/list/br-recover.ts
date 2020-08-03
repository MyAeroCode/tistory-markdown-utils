import { ProcessMode } from "../process-mode";

/**
 * BR 태그를 복구하는 모드
 */
export const BR_RECOVER = new ProcessMode({
    name: "BR_RECOVER",
    process: (context) => {
        return `[${context.docsTitle}] BR_RECOVER \n${context.inputText}\n`;
    },
});
