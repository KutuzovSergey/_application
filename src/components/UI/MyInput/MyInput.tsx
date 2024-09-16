import React, { FC, ChangeEvent } from "react";

import cl from './MyInput.module.scss';

type Props = {
    type: string,
    name: string,
    value: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onFocus?: () => void,
    autoComplete?: string,
}

const MyInput:FC<Props> = (props: Props) => {
    return (
        <input className={cl.myInput} {...props}/>
    )
}

export default MyInput;