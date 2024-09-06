import { changeIsAuthConst, userConst } from "../constants/constants.ts";
import { UserDataType } from "../type/typesHooks.ts";
import { UserActionType } from "../type/typesStore.ts";

// авторизация пользователя
export const changeIsAuth = (isAuth: boolean): UserActionType => {
    return {
        type: changeIsAuthConst.CHANGE_IS_AUTH,
        userData: isAuth
    }
}

export const addUser = (userData: UserDataType): UserActionType => {
    return {
        type: userConst.ADD_USER_DATA,
        userData: userData
    }
}

export const deleteUser = (userData: UserDataType): UserActionType => {
    return {
        type: userConst.DELETE_USER,
        userData: userData
    }
}