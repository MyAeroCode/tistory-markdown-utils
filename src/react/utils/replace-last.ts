export function replaceLast(
    str: string,
    searchValue: string | RegExp,
    replaceValue: string
) {
    if (typeof searchValue === "string") {
        searchValue = new RegExp(
            searchValue
                .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                .replace(/-/g, "\\x2d"),
            "g"
        );
    }

    const matchs = str.match(searchValue);
    if (matchs === null) {
        //
        // 패턴 일치결과가 없음.
        return str;
    } else if (matchs.length === 1) {
        //
        // 패턴이 하나만 일치함.
        return str.replace(matchs[0], replaceValue);
    } else {
        //
        // 패턴이 여러개 일치함.
        const lastMatch = matchs[matchs.length - 1];
        const splited = str.split(lastMatch);
        const r = splited.pop();
        const l = splited.join(lastMatch);
        return l + replaceValue + r;
    }
}
