import { useState, ChangeEvent } from "react";
import { ErrorStatusType, UseLoginAccountType, UserDataType } from "../type/typesHooks";

export const useLoginAccount = (): UseLoginAccountType =>{
    const [userData, setUserData] = useState<UserDataType>({
        userName: '',
        userPassword: '',
    });

    const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
        errorName: false,
        errorPassword: false,
    })

    const changeInput = (e: ChangeEvent): void => {
        const newUserData: UserDataType = { ...userData };
        const newErrorStatus: ErrorStatusType = { ...errorStatus };
        const formElem = e.target as HTMLInputElement;
        
        switch (formElem.name) {
            case 'UserName':
                newUserData.userName = formElem.value;
                if (newErrorStatus.errorName) {
                    newErrorStatus.errorName = false;
                }
                break;
            case 'UserPassword':
                newUserData.userPassword = formElem.value;
                if (newErrorStatus.errorPassword) {
                    newErrorStatus.errorPassword = false;
                }
                break;
            default:
                break;
        }

        setUserData(newUserData);
        setErrorStatus(newErrorStatus);
    }

    return [
        userData,
        changeInput,
    ]
}