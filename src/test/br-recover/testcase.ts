import { test0 } from "./case0";
import { test1 } from "./case1";
import { test2 } from "./case2";
import { test3 } from "./case3";
import { test4 } from "./case4";
import { test5 } from "./case5";
import { test6 } from "./case6";
import { test7 } from "./case7";
import { test8 } from "./case8";

export interface BrRecoverTestCase {
    testTitle: string;
    docsTitle: string;
    inputText: string;
    expect: string;
    mustError?: boolean;
}

export const brRecoverTestCases: BrRecoverTestCase[] = [
    test0,
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
];
