import { FormEvent, ChangeEvent } from "react";
import { TableCellType } from "./typesMain";

// Вход на сайт
export type UserDataType = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export type ErrorStatusType = {
  errorName: boolean;
  errorPassword: boolean;
};

export type ErrorTextType = {
  errorName: string;
  errorPassword: string;
};

export type UseLoginAccountType = [
  userData: UserDataType,
  errorText: ErrorTextType,
  errorStatus: ErrorStatusType,
  errorConnection: boolean,
  errorConnectionText: string,
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  validation: (e: FormEvent<HTMLInputElement>) => boolean,
  clearForm: () => void,
  returnFormState: () => void,
  setErrorConnection: (error: boolean) => void,
  setErrorConnectionText: (error: string) => void,
  setSomethingWentWrong: (status: boolean) => void
];

// Регистрация

export type ErrorStatusRegistrType = {
  errorName: boolean;
  errorPassword: boolean;
  errorRepeatPassword: boolean;
};

export type ErrorTextRegistrType = {
  errorName: string;
  errorPassword: string;
  errorRepeatPassword: string;
};

export type UseRegistrAccountType = [
  userData: UserDataType,
  errorText: ErrorTextRegistrType,
  errorStatus: ErrorStatusRegistrType,
  errorConnection: boolean,
  errorConnectionText: string,
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  validation: (e: FormEvent<HTMLInputElement>) => boolean,
   clearForm: () => void,
  returnFormState: () => void,
  setErrorConnection: (error: boolean) => void,
  setErrorConnectionText: (error: string) => void,
  setSomethingWentWrong: (status: boolean) => void
];

// добавление новой записи

export type ErrorStatusPostType = {
  errorName: boolean;
  errorNumber: boolean;
  errorStatus: boolean;
  errorFormat: boolean;
};

export type ErrorTextPostType = {
  errorName: string;
  errorNumber: string;
  errorStatus: string;
  errorFormat: string;
};

export type CheckboxFormatType = {
  pdf: boolean;
  sig: boolean;
};

export type UseDocumentType = [
  newDocument: TableCellType,
  errorStatus: ErrorStatusPostType,
  errorText: ErrorTextPostType,
  checkboxFormat: CheckboxFormatType,
  errorMessage: string,
  errorMessageStatus: boolean,
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  validation: (e: FormEvent<HTMLInputElement>) => boolean,
  chengePost: (e: ChangeEvent<HTMLInputElement>) => void,
  clearForm: () => void,
  addPost: () => void,
  selectFormat: (e: ChangeEvent<HTMLInputElement>) => void
];

export type UseLegalizationType = [
  userLegalization: (
    userToken: string,
    userData: UserDataType,
    setActive: (bool: boolean) => void,
    clearForm: () => void
  ) => void
];

export type UseDeleteCellType = [
  errorText: string,
  errorStatus: boolean,
  deleteCell: () => void
];
