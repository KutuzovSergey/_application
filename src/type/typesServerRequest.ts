import { FormEvent, ChangeEvent } from 'react';

export type UseAddPostType = {
   newEntry: string,
   chengePost: (e: ChangeEvent<HTMLInputElement>) => void,
   addPost: () => void,
}