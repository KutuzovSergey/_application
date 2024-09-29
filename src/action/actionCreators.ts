import { userConst, documentsConst } from "../constants/constants.ts";
import { UserDataType } from "../type/typesHooks.ts";
import {
  UserActionType,
  DocumentsReducerType,
  DocumentActionType,
  UserDataReducerType,
} from "../type/typesStore.ts";

// авторизация пользователя
export const changeIsAuth = (isAuth: boolean): UserActionType => {
  return {
    type: userConst.CHANGE_IS_AUTH,
    userData: isAuth,
  }
}

export const addUserToken = (userData: string | null): UserActionType => {
  return {
    type: userConst.ADD_USER_TOKEN,
    userData: userData,
  }
}

export const addUserData = (userData: UserDataType): UserActionType => {
  return {
    type: userConst.ADD_USER_DATA,
    userData: userData,
  }
}

export const installUser = (userData: UserDataReducerType): UserActionType => {
  return {
    type: userConst.INSTALL_USER,
    userData: userData,
  }
}

//

export const addDocument = (
  listDocument: DocumentsReducerType
): DocumentActionType => {
  return {
    type: documentsConst.ADD_DOCUMENT,
    listDocument: listDocument,
  }
}

export const deleteDocument = (
  listDocument: DocumentsReducerType
): DocumentActionType => {
  return {
    type: documentsConst.DELETE_DOCUMENT,
    listDocument: listDocument,
  }
}

export const setListDocument = (
  listDocument: DocumentsReducerType
): DocumentActionType => {
  return {
    type: documentsConst.SET_LIST_DOCUMENT,
    listDocument: listDocument,
  }
}

export const changeDocument = (
  listDocument: DocumentsReducerType
): DocumentActionType => {
  return {
    type: documentsConst.CHANGE_DOCUMENT,
    listDocument: listDocument,
  }
}
