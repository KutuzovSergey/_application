import { documentsConst } from '../constants/constants.ts';
import { DocumentsReducerType, DocumentActionType } from '../type/typesStore.ts';

const defaultState: DocumentsReducerType | [] = [];

export const documentsReducer = (state = defaultState, action: DocumentActionType) => {
    switch (action.type){
        case documentsConst.ADD_DOCUMENT:
            return [...state, ...action.listDocument] 
        case documentsConst.DELETE_DOCUMENT:
            return { userData: action.listDocument }
        case documentsConst.SET_LIST_DOCUMENT:
            return [ ...action.listDocument ]
        default:
            return state
    }
}