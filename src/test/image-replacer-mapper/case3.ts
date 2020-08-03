import { ImageReplacerMapperTestCase } from "./testcase";

const testTitle = `
다양한 문법이 섞인 문서
`.trim();

const docsTitle = `
test
`.trim();

const inputText = `

> 인용 문법

> # 인용과 h1 혼용

# h1 문법

## h2 문법

### h3 문법

**굵게 문법 :**

리스트 문법

+ 1
+ 2
+ 3
+ 4

\`인라인 코드 문법\`

\`\`\`cpp
코드 문법
\`\`\`

![](./images/test-aa.png)

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img1.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

![](./images/test-bb.png)

[##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

![](./images/test-cc.png)

Hello, World!

[링크 문법][##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

`;

const expect = `

> 인용 문법

> # 인용과 h1 혼용

# h1 문법

## h2 문법

### h3 문법

**굵게 문법 :**

리스트 문법

+ 1
+ 2
+ 3
+ 4

\`인라인 코드 문법\`

\`\`\`cpp
코드 문법
\`\`\`

![](./images/test-aa.png)

![](./images/test-00.png)

![](./images/test-bb.png)

![](./images/test-01.png)

![](./images/test-cc.png)

Hello, World!

[링크 문법][##_Image|kage@FOPC4/btqGe99URP0/8TqNh9858WR8k6CPHPx6X0/img2.png|alignCenter|width="100%" data-origin-width="0" data-origin-height="0" data-ke-mobilestyle="widthContent"|||_##]

`;

export const test3: ImageReplacerMapperTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
