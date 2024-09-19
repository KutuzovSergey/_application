import {
    UserConstType,
    changeIsAuthConstType,
    InstallTokenConstType,
    InstallUserConstType, DocumentsConstType
} from "../type/typesStore.ts";

export const userConst: UserConstType = {
    ADD_USER_DATA: 'ADD_USER_DATA',
    DELETE_USER: 'DELETE_USER',
}

export const changeIsAuthConst: changeIsAuthConstType = {
    CHANGE_IS_AUTH: 'CHANGE_IS_AUTH',
}

export const InstallTokenConst: InstallTokenConstType = {
    INSTALL_TOKEN: 'INSTALL_TOKEN',
}

export const InstallUserConst: InstallUserConstType = {
    INSTALL_USER: 'INSTALL_USER',
}

export const documentsConst: DocumentsConstType = {
    ADD_DOCUMENT: 'ADD_DOCUMENT',
    DELETE_DOCUMENT: 'DELETE_DOCUMENT',
    SET_LIST_DOCUMENT: 'SET_LIST_DOCUMENT',
}