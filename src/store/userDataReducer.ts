import { userConst, changeIsAuthConst, InstallTokenConst } from '../constants/constants.ts';
import { UserActionType, StateUserType } from '../type/typesStore.ts';

const defaultState: StateUserType = {
    userData: {
            username: '',
            password: '',
        },
    isAuth: false,
    token: ''
}

export const userDataReducer = (state = defaultState, action: UserActionType) => {
    switch (action.type){
        case userConst.ADD_USER_DATA:
            return { userData: action.userData }
        case userConst.DELETE_USER:
            return { userData: action.userData }
        case changeIsAuthConst.CHANGE_IS_AUTH:
            return { ...defaultState, isAuth: action.userData }
        case InstallTokenConst.INSTALL_TOKEN:
            return { ...defaultState, token: action.userData }
        default:
            return state
    }
}