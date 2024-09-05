import { FormEvent, ChangeEvent } from 'react';

export type UseAddPostType = {
   newEntry: string,
   chengePost: (e: ChangeEvent<HTMLInputElement>) => void,
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

export type ErrorTextType = {
   errorName: string,
   errorPassword: string,
}

export type UseLoginAccountType = [
   userData: UserDataType,
   errorText: ErrorTextType,
   errorStatus: ErrorStatusType,
   changeInput: (e: ChangeEvent<HTMLInputElement>) => void,
   validation: (e: FormEvent<HTMLInputElement>) => boolean
]