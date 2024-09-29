import { UserDataType } from "../type/typesHooks";
import { UserDataReducerType } from "../type/typesStore";

export const collectingUserObject = (
  userData: UserDataType,
  userToken: string,
  isAuth: boolean
): UserDataReducerType => {
  const nawUserData: any = { ...userData };
  delete nawUserData.repeatPassword;
  
  const result: UserDataReducerType = {
    userData: nawUserData,
    isAuth: isAuth,
    token: userToken,
  };
  
  return result
}
