import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, AppBar, Tab, Tabs } from "@material-ui/core";
import { BR_RECOVER, IMAGE_REPLACER_MAPPER, COMPLEX } from "./process-mode";
import { EditorContext } from ".";

/**
 * 스타일
 */
const useStyles = makeStyles({
    root: {
        color: "white",
        background: "rgb(30, 30, 30)",
    },
    header: {
        marginTop: "-29px",
    },
    body: {
        width: "99%",
        height: "93.8%",
        marginTop: "+35px",
        background: "rgb(30, 30, 30)",
        color: "white",
    },
});

type OutputAreaProps = {
    context: EditorContext;
};

/**
 * 선택한 모드에 따라 각기다른 변환결과를 보여주는 텍스트 창
 */
export function OutputAera({ context }: OutputAreaProps) {
    const classes = useStyles();
    const [mode, setMode] = React.useState(BR_RECOVER);

    //
    // 해당 모드로 변환된 문자열을 가져온다.
    // 에러가 발생한 경우 에러 메세지로 설정된다.
    let processed: string;
    try {
        processed = mode.process(context);
    } catch (e) {
        processed = e;
    }

    return (
        <Box className={classes.root}>
            {/* 모드 선택바 */}
            <AppBar position="sticky" className={classes.header}>
                <Tabs
                    onChange={function handleChange(event, newMode) {
                        setMode(newMode);
                    }}
                    value={mode}
                >
                    {/* BR 태그 복구모드 */}
                    <Tab label={BR_RECOVER.name} value={BR_RECOVER} />

                    {/* 이미지 치환자 변환 모드 */}
                    <Tab
                        label={IMAGE_REPLACER_MAPPER.name}
                        value={IMAGE_REPLACER_MAPPER}
                    />

                    {/* BR 태그를 복구 한 뒤, 이미지 치환자를 변환하는 모드 */}
                    <Tab label={COMPLEX.name} value={COMPLEX} />
                </Tabs>
            </AppBar>

            {/* 선택한 모드의 결과가 출력되는 텍스트 영역 */}
            <textarea className={classes.body} value={processed} />
        </Box>
    );
}
