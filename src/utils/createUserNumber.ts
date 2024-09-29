import { UserDataType } from "../type/typesHooks";

export const dataPreparation = (
  data: UserDataType,
  numberUser: number
): string => {
  const nawData: any = { ...data };
  nawData.username = `${data.username}${numberUser}`;

  if ("repeatPassword" in nawData) {
    delete nawData.repeatPassword;
  }

  return JSON.stringify(nawData)
}
