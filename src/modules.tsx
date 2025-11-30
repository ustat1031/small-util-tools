import type { JSX } from "react";

interface AddButtonProps {
    Button: string;
}

function AddButton(props: AddButtonProps): JSX.Element {

    return (
        <button>{props.Button}</button>
    );
}

export { AddButton };