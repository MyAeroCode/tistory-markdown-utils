import { BrRecoverTestCase } from "./testcase";

const testTitle = `
이미지와 텍스트는 붙여 씁니다 (2)
`.trim();

const docsTitle = `
test
`;

const inputText = `
텍스트

[##_Image|kage@o0E9c/btqGbkec8kS/uJ9AOautdPO55qQOaNvpO1/img.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

텍스트
`.trim();

const expect = `
텍스트

[##_Image|kage@o0E9c/btqGbkec8kS/uJ9AOautdPO55qQOaNvpO1/img.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

텍스트
`.trim();

export const test11: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
