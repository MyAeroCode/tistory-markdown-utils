import { BrRecoverTestCase } from "./testcase";

const testTitle = `
같은 레벨 내, 리스트의 위는 텍스트가 있더라도 붙여쓰고 아래는 띄어씁니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
# a

**List :**

+ 1
+ 2
+ 3

## b

* a
* b
* c

### c

- x
    - x-1
    - x-2
    - x-3
- y
    - y-1
    - y-2
        - y-1-1
        - y-1-2

`.trim();

const expect = `
> # a

**List :**

+ 1
+ 2
+ 3

<br/>

## b

* a
* b
* c

<br/>

### c

- x
    - x-1
    - x-2
    - x-3
- y
    - y-1
    - y-2
        - y-1-1
        - y-1-2
`.trim();

export const test6: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
