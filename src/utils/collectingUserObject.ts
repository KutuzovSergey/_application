import { UserDataType } from "../type/typesHooks"
import { StateUserType } from "../type/typesStore";

export const collectingUserObject = (userData: UserDataType, userToken: string, isAuth: boolean): StateUserType => {
    const nawUserData: any = { ...userData }
    delete nawUserData.repeatPassword
    const result: StateUserType = {
        userData: nawUserData,
        isAuth: isAuth,
        token: userToken,
    }
    console.log(result);
    
    return result
} 