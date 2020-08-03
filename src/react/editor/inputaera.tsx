import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, TextField } from "@material-ui/core";
import { EditorContext } from ".";

/**
 * 스타일
 */
const useStyles = makeStyles({
    docsTitle: {
        background: "rgb(37, 37, 38)",
        color: "white",
        width: "98.5%",
        marginLeft: "10px",
        marginTop: "7px",
        fontSize: "large",
    },
    inputText: {
        width: "98.5%",
        height: "94.3%",
        marginTop: "6px",
        marginLeft: "0.5%",
        background: "rgb(30, 30, 30)",
        color: "white",
    },
});

type InputAreaProps = {
    context: EditorContext;
    setContext: (context: EditorContext) => void;
};

export function InputArea({ context, setContext }: InputAreaProps) {
    const classes = useStyles();
    return (
        <Box>
            {/* 문서 이름 입력부 */}
            <TextField
                className={classes.docsTitle}
                inputProps={{
                    className: classes.docsTitle,
                }}
                value={context.docsTitle}
                onChange={function handleChange(event) {
                    setContext({
                        docsTitle: event.target.value,
                        inputText: context.inputText,
                    });
                }}
            />

            {/* 문서 내용 입력부 */}
            <textarea
                className={classes.inputText}
                value={context.inputText}
                onChange={function handleChange(event) {
                    setContext({
                        docsTitle: context.docsTitle,
                        inputText: event.target.value,
                    });
                }}
            />
        </Box>
    );
}
