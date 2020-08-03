import { ProcessMode } from "../process-mode";

/**
 * 티스토리 이미지 치환자를 변환하는 모드
 */
export const IMAGE_REPLACER_MAPPER = new ProcessMode({
    name: "IMAGE_REPLACER_MAPPER",
    process: (context) => {
        return `[${context.docsTitle}] IMAGE_REPLACER_MAPPER \n${context.inputText}\n`;
    },
});
