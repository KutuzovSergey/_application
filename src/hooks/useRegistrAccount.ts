import { useState, ChangeEvent, FormEvent } from "react";
import {
    ErrorStatusRegistrType,
    UseRegistrAccountType,
    UserDataType,
    ErrorTextRegistrType
} from "../type/typesHooks";

export const useRegistrAccount = (): UseRegistrAccountType =>{
    const [userData, setUserData] = useState<UserDataType>({
        username: '',
        password: '',
    });

    const [errorStatus, setErrorStatus] = useState<ErrorStatusRegistrType>({
        errorName: false,
        errorPassword: false,
        errorRepeatPassword: false,
    });

    const [errorText, setErrorText] = useState<ErrorTextRegistrType>({
        errorName: '',
        errorPassword: '',
        errorRepeatPassword: '',
    });

    const changeInput = (e: ChangeEvent): void => {
        const newUserData: UserDataType = { ...userData };
        const formElem = e.target as HTMLInputElement;
        
        switch (formElem.name) {
            case 'UserName':
                newUserData.username = formElem.value;
                break;
            case 'UserPassword':
                newUserData.password = formElem.value;
                break;
            default:
                break;
        }

        setUserData(newUserData);
    }

    const validation = (e: FormEvent<HTMLInputElement>): boolean => {
        const form = e.target as HTMLFormElement;
        const newErrorText: ErrorTextRegistrType = { ...errorText };
        const newErrorStatus: ErrorStatusRegistrType = { ...errorStatus };
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
                case 'UserPassword':
                    if (!elementValue) {
                        newErrorText.errorPassword = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorPassword) {
                            newErrorStatus.errorPassword = false;
                        }
                    } else if (elementValue !== form[1].value.trim()) {
                        newErrorText.errorPassword = 'Пароли не совпадают';
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

    const clearForm = () => {
        setUserData({
            username: '',
            password: '',
        });
    }

    return [
        userData,
        errorText,
        errorStatus,
        changeInput,
        validation,
        clearForm,
    ]
}