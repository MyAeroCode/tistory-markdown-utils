import { ImageReplacerMapperTestCase } from "./testcase";

const testTitle = `
한 줄 문서
`.trim();

const docsTitle = `
test
`.trim();

const inputText = `
[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]
`;

const expect = `
![](./images/test-00.png)
`;

export const test1: ImageReplacerMapperTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
