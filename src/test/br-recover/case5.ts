import { BrRecoverTestCase } from "./testcase";

const testTitle = `
같은 레벨 내, 각 텍스트 문단 사이는 띄어씁니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
# a

Hello, World!

## b

Hello,

World!

### c

Hello,

My,

Friend!
`.trim();

const expect = `
> # a

Hello, World!

<br/>

## b

Hello,

<br/>

World!

<br/>

### c

Hello,

<br/>

My,

<br/>

Friend!
`.trim();

export const test5: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
