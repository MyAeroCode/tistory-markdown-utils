import { ImageReplacerMapperTestCase } from "./testcase";

const testTitle = `
각 행의 불필요한 뒤의 공백은 제거되어야 합니다
`.trim();

const docsTitle = `
test
`.trim();

const inputText = `

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img1.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]    

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]   

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img3.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]  

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img4.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##] 

`;

const expect = `

![](./images/test-00.png)

![](./images/test-01.png)

![](./images/test-02.png)

![](./images/test-03.png)

`;

export const test5: ImageReplacerMapperTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
