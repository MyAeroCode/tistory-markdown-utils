import { strictEqual } from "assert";
import { replaceLast } from "../../react/utils";

describe("Replace Last", function () {
    it("아무것도 매칭되지 않은 경우 - 문자열", function () {
        strictEqual(
            replaceLast(`Mocha Test is Cool.`, `Hello`, `Bye`),
            `Mocha Test is Cool.`
        );
    });

    it("아무것도 매칭되지 않은 경우 - 정규식", function () {
        strictEqual(
            replaceLast(`Mocha Test is Cool.`, /Hello/gm, `Bye`),
            `Mocha Test is Cool.`
        );
    });

    it("하나만 매칭되는 경우 - 문자열", function () {
        strictEqual(
            replaceLast(`Mocha Test is Cool.`, `Mocha`, `Presso`),
            `Presso Test is Cool.`
        );
    });

    it("하나만 매칭되는 경우 - 정규식", function () {
        strictEqual(
            replaceLast(`Mocha Test is Cool.`, /Mocha/gm, `Presso`),
            `Presso Test is Cool.`
        );
    });

    it("여러개 매칭되는 경우 - 문자열", function () {
        strictEqual(
            replaceLast(`Hello Hello Hello`, `Hello`, `Bye`),
            `Hello Hello Bye`
        );
    });

    it("여러개 매칭되는 경우 - 정규식", function () {
        strictEqual(
            replaceLast(`Hello Hello Hello`, /Hello/gm, `Bye`),
            `Hello Hello Bye`
        );
    });
});
