import { ProcessMode } from "../process-mode";
import { IMAGE_REPLACER_MAPPER } from "./image-replacer-mapper";
import { BR_RECOVER } from "./br-recover";

/**
 * 이미지 치환자를 변환 한 뒤,
 * BR 태그를 복구하는 모드.
 */
export const COMPLEX = new ProcessMode({
    name: "Complex",
    process: (context) => {
        let ctx = Object.assign({}, context);
        const chain: ProcessMode[] = [IMAGE_REPLACER_MAPPER, BR_RECOVER];
        for (const mode of chain) {
            ctx.inputText = mode.process(ctx);
        }
        return ctx.inputText;
    },
});
