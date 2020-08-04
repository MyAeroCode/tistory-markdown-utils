import { BrRecoverTestCase } from "./testcase";

const testTitle = `
1레벨 제목만 인용문이 적용되어야 합니다 (2)
`.trim();

const docsTitle = `
test
`;

const inputText = `
> # a

> ## b

> ### c
`.trim();

const expect = `
> # a

## b

### c
`.trim();

export const test2: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
