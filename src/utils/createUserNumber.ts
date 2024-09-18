import { UserDataType } from "../type/typesHooks"

export const dataPreparation = (data: UserDataType, numberUser: number): string => {
    const nawData: any = { ...data };
    nawData.username = `${data.username}${numberUser}`;

    if ('repeatPassword' in nawData) {
        console.log(nawData);
        delete nawData.repeatPassword;
    }

    console.log(nawData);

    return JSON.stringify(nawData)
} 