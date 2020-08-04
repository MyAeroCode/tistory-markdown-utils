import { BrRecoverTestCase } from "./testcase";

const testTitle = `
리스트는 붙여써야 합니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
순서없는 리스트 :

+ 1
+ 2
+ 3

순서없는 리스트 :

* 1
* 2
* 3

순서없는 리스트 :

- 1
- 2
- 3

순서있는 리스트 :

1. 1
2. 2
3. 3
`.trim();

const expect = `
순서없는 리스트 :

+ 1
+ 2
+ 3

<br/>

순서없는 리스트 :

* 1
* 2
* 3

<br/>

순서없는 리스트 :

- 1
- 2
- 3

<br/>

순서있는 리스트 :

1. 1
2. 2
3. 3
`.trim();

export const test9: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
