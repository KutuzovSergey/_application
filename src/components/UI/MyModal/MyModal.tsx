import React from "react";
import MyButtonSmall from "../MyButtonSmall/MyButtonSmall.tsx";
// import { useMyModal } from "../../../hooks/useMyModal.ts";

import cl from "./MyModal.module.scss";


type Props = {
    children: React.ReactNode | string,
    active: boolean,
    setActive: (bool: boolean) => void,
    activityIndicator?: boolean,
    className?: string
}

const MyModal:React.FC<Props> = ({children, ...props}: Props) =>{
    const modalClass: string[] = [cl.myModal];
    const modalClassBlock: string[] = [cl.myModal__block, cl.myModal__block_scroll];
    const disableClass: string[] = [cl.myModal__disable];

    // const [ disable ] = useMyModal();

    if (props.active) {
        modalClass.push(cl.active);
        modalClassBlock.push(cl.active);
    }

    const closeMyModal = (): void => {
        props.setActive(false);
    }

    // if (disable) {
    //     disableClass.pop();
    //     disableClass.push(cl.myModal__disable_active);
    //     modalClassBlock.push(cl.myModal__block_scroll_none);
    // }
    
    return (
        <div 
            className={modalClass.join(' ')} 
            onClick={() => {props.setActive(false)}}>
            
            <div onClick={(e) => e.stopPropagation()} className={modalClassBlock.join(' ')}>
                <div className={disableClass.join()}></div>
                <div className={cl.myModal__close}>
                    <MyButtonSmall onClick={closeMyModal} activityIndicator={true}>&#10006;</MyButtonSmall>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MyModal;