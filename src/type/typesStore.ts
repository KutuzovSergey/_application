import { UserDataType } from "./typesHooks";

export type UserActionType = {
   type: string,
   userData: UserDataType | boolean | string | StateUserType
}

export type UserConstType = {
   ADD_USER_DATA: string,
   DELETE_USER: string,
}

export type StateUserType = {
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

