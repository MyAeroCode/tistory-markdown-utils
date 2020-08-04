import { BrRecoverTestCase } from "./testcase";

const testTitle = `
코드블럭 내용은 이스케이프되어야 합니다
`.trim();

const docsTitle = `
test
`;

const inputText = `
\`\`\`yaml
# 
# Github Action
name : Hello, World!

on :
    pull_request :
        - branches : [master]
    push :
        - branches : [master]
\`\`\`

### Hello, World!

\`\`\`yaml
# 
# Github Action
name : Hello, World!

on :
    pull_request :
        - branches : [master]
    push :
        - branches : [master]
\`\`\`
`.trim();

const expect = `
\`\`\`yaml
# 
# Github Action
name : Hello, World!

on :
    pull_request :
        - branches : [master]
    push :
        - branches : [master]
\`\`\`

### Hello, World!

\`\`\`yaml
# 
# Github Action
name : Hello, World!

on :
    pull_request :
        - branches : [master]
    push :
        - branches : [master]
\`\`\`
`.trim();

export const test8: BrRecoverTestCase = {
    testTitle,
    docsTitle,
    inputText,
    expect,
};
