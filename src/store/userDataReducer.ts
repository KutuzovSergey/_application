import { userConst } from '../constants/constants.ts';
import { UserActionType, UserDataReducerType } from '../type/typesStore.ts';

const defaultState: UserDataReducerType = {
    userData: {
            username: '',
            password: '',
        },
    isAuth: false,
    token: ''
}

export const userDataReducer = (state = defaultState, action: UserActionType) => {
    switch (action.type){
        case userConst.CHANGE_IS_AUTH:
            return { ...defaultState, isAuth: action.userData }
        case userConst.ADD_USER_NAME_DATA:
            return { ...action.userData }
        case userConst.INSTALL_USER:
            return { ...action.userData }
        default:
            return state
    }
}