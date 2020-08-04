import { BrRecoverTestCase } from "./testcase";

const testTitle = `
상위 레벨에 텍스트가 있는 경우, 하위 레벨과 띄어씁니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
# a

Hello, World!

## b

Hello, World!

### c

Hello, World!

# a

Hello, World!

## b

Hello, World!

### c

Hello, World!
`.trim();

const expect = `
> # a

Hello, World!

<br/>

## b

Hello, World!

<br/>

### c

Hello, World!

<br/>

> # a

Hello, World!

<br/>

## b

Hello, World!

<br/>

### c

Hello, World!
`.trim();

export const test4: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
