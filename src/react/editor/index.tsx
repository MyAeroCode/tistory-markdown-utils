import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { InputArea } from "./inputaera";
import { OutputAera } from "./outputaera";

/**
 * 스타일
 */
const useStyles = makeStyles({
    root: {
        background: "rgb(30, 30, 30)",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        "& > *": {
            height: "100vh",
            width: "50vw",
            display: "table-cell",
        },
    },
});

/**
 * 사용자가 주어야 하는 입력값들
 */
export type EditorContext = {
    /**
     * 현재 작업중인 문서의 이름
     */
    docsTitle: string;

    /**
     * 현재 작업중인 문서의 내용
     */
    inputText: string;
};

export function Editor() {
    const classes = useStyles();
    const [context, setContext] = React.useState({
        docsTitle: "빈 문서",
        inputText: "",
    } as EditorContext);

    return (
        <Box className={classes.root}>
            {/* 입력부 */}
            <InputArea context={context} setContext={setContext} />

            {/* 출력부 */}
            <OutputAera context={context} />
        </Box>
    );
}
