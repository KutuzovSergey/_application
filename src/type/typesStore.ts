import { UserDataType } from "./typesHooks";

export type UserActionType = {
   type: string,
   userData: UserDataType | boolean
}

export type UserConstType = {
   ADD_USER_DATA: string,
   DELETE_USER: string,
}

export type StateUserType = {
   userData: UserDataType,
   isAuth: boolean
}

export type changeIsAuthConstType = {
   CHANGE_IS_AUTH: string,
}