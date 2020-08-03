import { describe, it } from "mocha";
import { imageReplacerMapperTestCases } from "./testcase";
import { strictEqual } from "assert";
import { IMAGE_REPLACER_MAPPER as mode } from "../../react/editor/process-mode/list";

describe("Image Replacer Mapper Mode", function () {
    /**
     * 초기 세팅
     */
    it("초기화", function () {
        strictEqual(mode.name, "IMAGE_REPLACER_MAPPER");
    });

    /**
     * 각 테스트케이스를 실행
     */
    for (const testcase of imageReplacerMapperTestCases) {
        it(testcase.testTitle, function (done) {
            try {
                if (testcase.mustError) {
                    //
                    // 실패해야 하는 테스트.
                    mode.process(testcase);
                    throw new Error("이 테스트는 성공해서는 안됩니다.");
                } else {
                    //
                    // 성공해야 하는 테스트.
                    strictEqual(mode.process(testcase), testcase.expect);

                    //
                    // 예상대로 성공한 경우.
                    done();
                }
            } catch (_err) {
                const err = _err as Error;
                if (testcase.mustError) {
                    if (err.message == "이 테스트는 성공해서는 안됩니다.") {
                        //
                        // 실패해야 했지만 성공한 경우.
                        done(err);
                    } else {
                        //
                        // 예상대로 실패한 경우.
                        done();
                    }
                } else {
                    //
                    // 성공해야 했지만 실패한 경우.
                    done(err);
                }
            }
        });
    }
});
