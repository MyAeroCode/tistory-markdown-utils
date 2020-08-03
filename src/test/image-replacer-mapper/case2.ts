import { ImageReplacerMapperTestCase } from "./testcase";

const testTitle = `
여러 줄 문서
`.trim();

const docsTitle = `
test
`.trim();

const inputText = `

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img1.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img3.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

`;

const expect = `

![](./images/test-00.png)

![](./images/test-01.png)

![](./images/test-02.png)

`;

export const test2: ImageReplacerMapperTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
