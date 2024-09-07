import { UserDataRegistrType } from "../type/typesHooks"

export const dataPreparation = (data: UserDataRegistrType, numberUser: number): string => {
    const nawData: any = { ...data };
    // const randomNumber: number = Math.random() * (100 - 1) + 1;
    nawData.username = `${data.username}${numberUser}`
    delete nawData.repeatPassword;

    return JSON.stringify(nawData)
} 