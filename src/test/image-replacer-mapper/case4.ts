import { ImageReplacerMapperTestCase } from "./testcase";

const testTitle = `
중복된 이미지가 있는 문서는 에러가 발생해야 합니다
`.trim();

const docsTitle = `
test
`.trim();

const inputText = `

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img1.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img3.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img4.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

`;

const expect = ``;

export const test4: ImageReplacerMapperTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
    mustError: true,
};
