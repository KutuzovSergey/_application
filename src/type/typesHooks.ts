import { FormEvent, ChangeEvent } from 'react';

export type UseAddPostType = {
   newEntry: string,
   chengePost: (e: ChangeEvent<HTMLInputElement>) => void,
   addPost: () => void,
}


// Вход на сайт
export type UserDataType = {
   username: string,
   password: string,
}

export type ErrorStatusType = {
   errorName: boolean,
   errorPassword: boolean,
}

export type ErrorTextType = {
   errorName: string,
   errorPassword: string,
}

export type UseLoginAccountType = [
   userData: UserDataType,
   errorText: ErrorTextType,
   errorStatus: ErrorStatusType,
   changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
   validation: (e: FormEvent<HTMLInputElement>) => boolean,
   clearForm: () => void,
]

// Регистрация
export type ErrorStatusRegistrType = {
   errorName: boolean,
   errorPassword: boolean,
   errorRepeatPassword: boolean
}

export type ErrorTextRegistrType = {
   errorName: string,
   errorPassword: string,
   errorRepeatPassword: string
}

export type UseRegistrAccountType = [
   userData: UserDataType,
   errorText: ErrorTextType,
   errorStatus: ErrorStatusType,
   changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
   validation: (e: FormEvent<HTMLInputElement>) => boolean,
   clearForm: () => void,
]