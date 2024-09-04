import { ChengeEvent } from 'react';

export type ourListType = {
	ADD_POST: string,
   DELETE_POST: string,
   CHANGE_POST: string
}

export type StateListType = {
	textPost: string[],
}

export type ChangeListActionType = {
   type: string,
   textPost: string
}

export type useAddPostType = {
   newEntry: string,
   chengePost: (e: ChengeEvent<HTMLInputElement>) => void,
   addPost: () => void,
}