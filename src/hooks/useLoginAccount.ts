import { useState, ChangeEvent, FormEvent } from "react";
import { ErrorStatusType, UseLoginAccountType, UserDataType, ErrorTextType } from "../type/typesHooks";

export const useLoginAccount = (): UseLoginAccountType =>{
    const [userData, setUserData] = useState<UserDataType>({
        username: '',
        password: '',
    });

    const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
        errorName: false,
        errorPassword: false,
    });

    const [errorText, setErrorText] = useState<ErrorTextType>({
        errorName: '',
        errorPassword: '',
    });

    const changeInput = (e: ChangeEvent): void => {
        const newUserData: UserDataType = { ...userData };
        // const newErrorStatus: ErrorStatusType = { ...errorStatus };
        const formElem = e.target as HTMLInputElement;
        
        switch (formElem.name) {
            case 'UserName':
                newUserData.username = formElem.value;
                // if (newErrorStatus.errorName) {
                //     newErrorStatus.errorName = false;
                // }
                break;
            case 'UserPassword':
                newUserData.password = formElem.value;
                // if (newErrorStatus.errorPassword) {
                //     newErrorStatus.errorPassword = false;
                // }
                break;
            default:
                break;
        }

        setUserData(newUserData);
        // setErrorStatus(newErrorStatus);
    }

    const validation = (e: FormEvent<HTMLInputElement>): boolean => {
        const form = e.target as HTMLFormElement;
        const newErrorText: ErrorTextType = { ...errorText };
        const newErrorStatus: ErrorStatusType = { ...errorStatus };
        let result = 0;

        for (let i = 0; i < form.length; i++) {
            const element = form[i] as HTMLInputElement;
            const elementValue: string = element.value.trim();

            switch (element.name) {
                case 'UserName':
                    if (!elementValue) {
                        newErrorText.errorName = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorName) {
                            newErrorStatus.errorName = false;
                        }
                    } else if (elementValue.length < 3) {
                        newErrorText.errorName = 'Логин не может содержать меньше двух символов';
                        result = ++result;
                        if (newErrorStatus.errorName) {
                            newErrorStatus.errorName = false;
                        }
                    } else {
                        newErrorText.errorName = '';
                        if (!newErrorStatus.errorName) {
                            newErrorStatus.errorName = true;
                        }
                    }
                    break;
                case 'UserPassword':
                    if (!elementValue) {
                        newErrorText.errorPassword = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorPassword) {
                            newErrorStatus.errorPassword = false;
                        }
                    } else if (elementValue.length < 3) {
                        newErrorText.errorPassword = 'Пароль не может содержать меньше двух символов';
                        result = ++result;
                        if (newErrorStatus.errorPassword) {
                            newErrorStatus.errorPassword = false;
                        }
                    } else {
                        newErrorText.errorPassword = '';
                        if (!newErrorStatus.errorPassword) {
                            newErrorStatus.errorPassword = true;
                        }
                    }
                default:
                    break;
            }
        }

        setErrorText(newErrorText);
        setErrorStatus(newErrorStatus);

        if (result !== 0) {
            return false
        } else {
            return true
        }
    }

    return [
        userData,
        errorText,
        errorStatus,
        changeInput,
        validation,
    ]
}