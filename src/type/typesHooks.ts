import { FormEvent, ChangeEvent } from 'react';
import { TableCellType } from './typesMain';

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
export type UserDataRegistrType = {
   username: string,
   password: string,
   repeatPassword: string
}

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
   userData: UserDataRegistrType,
   errorText: ErrorTextRegistrType,
   errorStatus: ErrorStatusRegistrType,
   changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
   validation: (e: FormEvent<HTMLInputElement>) => boolean,
   clearForm: () => void,
]

// добавление новой записи

export type ErrorStatusPostType = {
   errorName: boolean,
   errorNumber: boolean,
   errorStatus: boolean,
   errorFormat: boolean,
}

export type ErrorTextPostType = {
   errorName: string,
   errorNumber: string,
   errorStatus: string,
   errorFormat: string,
}

export type CheckboxFormatType = {
   pdf: boolean,
   sig: boolean,
}

export type useAddPostType = [
   newDocument: TableCellType,
    errorStatus: ErrorStatusPostType,
   errorText: ErrorTextPostType,
   checkboxFormat: CheckboxFormatType,
   changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
   validation: (e: FormEvent<HTMLInputElement>) => boolean,
   chengePost: (e: ChangeEvent<HTMLInputElement>) => void,
   clearForm: () => void,
   addPost: () => void,
   selectFormat: (e: ChangeEvent<HTMLInputElement>) => void
]