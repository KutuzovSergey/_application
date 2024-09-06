import React from "react";

import cl from './MyButton.module.scss';

type Props = {
    children: string | React.ReactNode,
    disabled?: boolean,
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const MyButton:React.FC<Props> = ({children, ...props}: Props) => {
    const buttonStyles: string[] = [cl.myButton];

    if (props.disabled) {
        buttonStyles.push(cl.myButton_disabled);
    }

    return (
        <button {...props} className={buttonStyles.join(' ')}>
            {children}
        </button>
    )
}

export default MyButton;