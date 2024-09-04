import React, {FC} from "react";

import cl from './MyTextarea.module.scss';

type Props = {
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    autoComplete?: string,
    onFocus?: () => void,
}

const MyTextarea:FC<Props> = (props: Props) => {
    return (
        <textarea className={cl.myTextarea} {...props}/>
    )
}

export default MyTextarea;