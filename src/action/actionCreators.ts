import { changeIsAuthConst, userConst, InstallTokenConst, InstallUserConst, documentsConst } from "../constants/constants.ts";
import { UserDataType } from "../type/typesHooks.ts";
import { UserDataReducerType, UserActionType, DocumentsReducerType, DocumentActionType } from "../type/typesStore.ts";

// авторизация пользователя
export const changeIsAuth = (isAuth: boolean): UserActionType => {
    return {
        type: changeIsAuthConst.CHANGE_IS_AUTH,
        userData: isAuth
    }
}

// export const addUser = (userData: UserDataType): UserActionType => {
//     return {
//         type: userConst.ADD_USER_DATA,
//         userData: userData
//     }
// }

export const deleteUser = (userData: UserDataType): UserActionType => {
    return {
        type: userConst.DELETE_USER,
        userData: userData
    }
}

export const installToken = (userData: string): UserActionType => {
    return {
        type: InstallTokenConst.INSTALL_TOKEN,
        userData: userData
    }
}

export const installUser = (userData: UserDataReducerType): UserActionType => {
    return {
        type: InstallUserConst.INSTALL_USER,
        userData: userData
    }
}

export const addDocument = (listDocument: DocumentsReducerType): DocumentActionType => {
    return {
        type: documentsConst.ADD_DOCUMENT,
        listDocument: listDocument
    }
}

export const deleteDocument = (listDocument: DocumentsReducerType): DocumentActionType => {
    return {
        type: documentsConst.DELETE_DOCUMENT,
        listDocument: listDocument
    }
}

export const setListDocument = (listDocument: DocumentsReducerType): DocumentActionType => {
    return {
        type: documentsConst.SET_LIST_DOCUMENT,
        listDocument: listDocument
    }
}