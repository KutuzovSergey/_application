import { useDispatch } from "react-redux";
import { installUser } from "../action/actionCreators.ts";
import { collectingUserObject } from "../utils/collectingUserObject.ts";
import { UseLegalizationType, UserDataType } from "../type/typesHooks";

export const useLegalization = (userToken: string, userData: UserDataType, setActive: (bool: boolean) => void, clearForm: () => void): UseLegalizationType => {
    const dispatch = useDispatch();

    const userLegalization = (): void => {
        if (userToken !== '' && typeof userToken === 'string') {
            dispatch(installUser(collectingUserObject(userData, userToken, true)));
            setActive(false);
            clearForm();
            localStorage.userToken = userToken;
            localStorage.userName = userData.username;
            console.log(localStorage);
        }
    }

    return [
        userLegalization
    ]
} 