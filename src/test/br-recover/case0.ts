import { BrRecoverTestCase } from "./testcase";

const testTitle = `
빈 문서
`.trim();

const docsTitle = `
test
`;

const inputText = `
`.trim();

const expect = `
`.trim();

export const test0: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
