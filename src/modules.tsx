import type { JSX } from "react";


/**
 * ボタン追加
 * @param props 
 * @returns 
 */
function AddButton(props: {
    Button: string;
}): JSX.Element {

    return (
        <button>{props.Button}</button>
    );
}

/**
 * セレクトメニュー
 * @param props 
 * @returns
 */
function AddSelectMenu(props: {
    id: string;
    values: string[];
}): JSX.Element {
    let out: JSX.Element[] = [];    //追加するオプション格納用
    let I: string;                  //ループ変数

    for (I of props.values) {
        out.push(<option value={I}>{I}</option>);
    }
    return (
        <>{out}</>
    )
}

export { AddButton, AddSelectMenu };