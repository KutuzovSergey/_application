import { documentsConst } from "../constants/constants.ts";
import { TableCellType } from "../type/typesMain.ts";
import {
  DocumentsReducerType,
  DocumentActionType,
} from "../type/typesStore.ts";

const defaultState: DocumentsReducerType | [] = [];

export const documentsReducer = (
  state = defaultState,
  action: DocumentActionType
) => {
  switch (action.type) {
    case documentsConst.ADD_DOCUMENT:
      return [...state, ...action.listDocument]
    case documentsConst.DELETE_DOCUMENT:
      console.log(action.listDocument);
      return [...action.listDocument]
    case documentsConst.CHANGE_DOCUMENT:
      const copyDefaultState: DocumentsReducerType | [] = [...state];
      const newState = copyDefaultState.map((doc: TableCellType) => {
        if (doc.id === action.listDocument[0].id) {
          return (doc = { ...action.listDocument[0] })
        } else {
          return doc
        }
      });
      return [...newState]
    case documentsConst.SET_LIST_DOCUMENT:
      return [...action.listDocument]
    default:
      return state
  }
}
