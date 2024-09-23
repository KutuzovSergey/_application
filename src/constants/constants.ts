import { UserConstType, DocumentsConstType } from "../type/typesStore.ts";

export const userConst: UserConstType = {
  INSTALL_USER: "INSTALL_USER",
  ADD_USER_DATA: "ADD_USER_DATA",
  CHANGE_IS_AUTH: "CHANGE_IS_AUTH",
  ADD_USER_TOKEN: "ADD_USER_TOKEN",
};

export const documentsConst: DocumentsConstType = {
  ADD_DOCUMENT: "ADD_DOCUMENT",
  CHANGE_DOCUMENT: "CHANGE_DOCUMENT",
  DELETE_DOCUMENT: "DELETE_DOCUMENT",
  SET_LIST_DOCUMENT: "SET_LIST_DOCUMENT",
};