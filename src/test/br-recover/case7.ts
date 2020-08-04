import { BrRecoverTestCase } from "./testcase";

const testTitle = `
같은 레벨 내, 이미지와 코드는 위아래에 제목을 제외한 무엇과도 붙여씁니다 
`.trim();

const docsTitle = `
test
`;

const inputText = `
# a

Hello, World!

![](./images/01.png)

Hello, World!

## b

+ Hello

![](./images/02.png)

+ Hello

![](./images/03.png)

### c

![](./images/04.png)

![](./images/05.png)
`.trim();

const expect = `
> # a

Hello, World!

![](./images/01.png)

Hello, World!

<br/>

## b

+ Hello

![](./images/02.png)

+ Hello

![](./images/03.png)

<br/>

### c

![](./images/04.png)

![](./images/05.png)
`.trim();

export const test7: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
