import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { GeneralAppDataType } from "../type/typeStore/typesStore";

export const useMyModal = (): boolean[] =>{
    const isDisable: GeneralAppDataType = useSelector((state: RootState) => state.generalApp);
    const [disable, setDisable] = useState(false);

    useEffect(() =>{
        setDisable(isDisable.isDisableModal);
    }, [isDisable]);

    return [
        disable
    ]
}