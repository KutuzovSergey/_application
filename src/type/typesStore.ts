import { UserDataType } from "./typesHooks";

export type UserConstType = {
   ADD_USER_DATA: string,
   DELETE_USER: string,
}

export type UserDataReducerType = {
   userData: UserDataType,
   isAuth: boolean,
   token: string
}

export type changeIsAuthConstType = {
   CHANGE_IS_AUTH: string,
}

export type InstallTokenConstType = {
   INSTALL_TOKEN: string,
}

export type InstallUserConstType = {
   INSTALL_USER: string,
}

export type UserActionType = {
   type: string,
   userData: UserDataType | boolean | string | UserDataReducerType
}

export type DocumentsConstType = {
   ADD_DOCUMENT: string,
   DELETE_DOCUMENT: string,
   SET_LIST_DOCUMENT: string,
}

export type DocumentsReducerType = {
    companySigDate: string,
    companySignatureName: string,
    documentName: string,
    documentStatus: string,
    documentType: string,
    employeeNumber: string,
    employeeSigDate: string,
    employeeSignatureName: string,
    id: string,
  }[]

export type DocumentActionType = {
   type: string,
   listDocument: []
}

export type StateUserType = {
   userData: UserDataReducerType,
   documents: DocumentsReducerType
}
