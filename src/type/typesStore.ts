import { UserDataType } from "./typesHooks";

export type UserConstType = {
   INSTALL_USER: string,
    CHANGE_IS_AUTH: string,
    ADD_USER_NAME_DATA: string,
}

export type UserDataReducerType = {
   userData: UserDataType,
   isAuth: boolean,
   token: string
}

export type UserActionType = {
   type: string,
   userData: any
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
