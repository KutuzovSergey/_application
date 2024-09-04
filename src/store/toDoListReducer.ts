import { ourListConst } from '../constants/constants.ts';
import { StateListType, ChangeListActionType } from '../type/typesMain';

const defaultState: StateListType = {
        textPost: [],
    }


export const toDoListReducer = (state = defaultState, action: ChangeListActionType) => {
    switch (action.type){
        case ourListConst.ADD_POST:
            return { ...state, textPost: defaultState.textPost.push(action.textPost) }
        default:
            return state
    }
}