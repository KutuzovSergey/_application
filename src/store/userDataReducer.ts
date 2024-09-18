import { InstallUserConst } from '../constants/constants.ts';
import { UserActionType, StateUserType } from '../type/typesStore.ts';

const defaultState: StateUserType = {
    userData: {
            username: '',
            password: '',
        },
    isAuth: false,
    token: ''
}

console.log(defaultState);

export const userDataReducer = (state = defaultState, action: UserActionType) => {
    switch (action.type){
        // case userConst.ADD_USER_DATA:
        //     return { userData: action.userData }
        // case userConst.DELETE_USER:
        //     return { userData: action.userData }
        // case changeIsAuthConst.CHANGE_IS_AUTH:
        //     return { ...defaultState, isAuth: action.userData }
        // case InstallTokenConst.INSTALL_TOKEN:
        //     return { ...defaultState, token: action.userData }
        case InstallUserConst.INSTALL_USER:
            return { ...action.userData }
        default:
            return state
    }
}