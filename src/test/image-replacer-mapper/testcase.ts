import { test0 } from "./case0";
import { test1 } from "./case1";
import { test2 } from "./case2";
import { test3 } from "./case3";
import { test4 } from "./case4";
import { test5 } from "./case5";

export interface ImageReplacerMapperTestCase {
    testTitle: string;
    docsTitle: string;
    inputText: string;
    expect: string;
    mustError?: boolean;
}

export const imageReplacerMapperTestCases: ImageReplacerMapperTestCase[] = [
    test0,
    test1,
    test2,
    test3,
    test4,
    test5,
];
