import { ChengeEvent } from 'react';

export type UseAddPostType = {
   newEntry: string,
   chengePost: (e: ChengeEvent<HTMLInputElement>) => void,
   addPost: () => void,
}

export type UserDataType = {
   userName: string,
   userPassword: string,
}

export type ErrorStatusType = {
   errorName: boolean,
   errorPassword: boolean,
}

export type UseLoginAccountType = {
   userData: UserDataType,
   changeInput: (e: ChengeEvent<HTMLInputElement>) => void,
   addPost: () => void,
}