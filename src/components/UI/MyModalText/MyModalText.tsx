import React, { FC } from "react";

import cl from "./MyModalText.module.scss";

type Props = {
    children: string,
}

const MyModalText: FC<Props> = ({ children }: Props) =>{
    return (
        <div className={cl.window_info}>
            <span>{children}</span>
        </div>
    )
}

export default MyModalText;