import { UserDataRegistrType } from "../type/typesHooks"
import { StateUserType } from "../type/typesStore";

export const collectingUserObject = (userData: UserDataRegistrType, userToken: string, isAuth: boolean): StateUserType => {
    const nawUserData: any = { ...userData }
    delete nawUserData.repeatPassword
    const result: StateUserType = {
        userData: nawUserData,
        isAuth: isAuth,
        token: userToken,
    }
    
    return result
} 