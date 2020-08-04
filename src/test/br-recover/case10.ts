import { BrRecoverTestCase } from "./testcase";

const testTitle = `
이미지와 텍스트는 붙여 씁니다 (1)
`.trim();

const docsTitle = `
test
`;

const inputText = `
텍스트

![](./images/01.png)

텍스트
`.trim();

const expect = `
텍스트

![](./images/01.png)

텍스트
`.trim();

export const test10: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
