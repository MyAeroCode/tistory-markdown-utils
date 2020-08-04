import { BrRecoverTestCase } from "./testcase";

const testTitle = `
상위 레벨에 텍스트가 없는 경우, 하위 레벨과 붙여씁니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
# a

## b

### c

# a

## b

### c
`.trim();

const expect = `
> # a

## b

### c

> # a

## b

### c
`.trim();

export const test3: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
