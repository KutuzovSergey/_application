import { useState } from "react";
import { UseDeleteCellType } from "../type/typesHooks.ts";
import { useDispatch, useSelector } from "react-redux";
import { DocumentsReducerType, StateUserType } from "../type/typesStore.ts";
import { deleteCellData, deleteData } from "../AP/allRequests.ts";
import { deleteDocument } from "../action/actionCreators.ts";

export const useDeleteCell = (id: string): UseDeleteCellType => {
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const documents: DocumentsReducerType = useSelector((state: StateUserType) => state.documents);
  const dispatch = useDispatch();

  const deleteCell = () => {
    const userToken: string = localStorage.getItem('userToken');
    const newDocument: DocumentsReducerType = [...documents];

    deleteCellData(userToken, deleteData, id).then(function (respons) {
      if (respons.data.error_code === 0) {
        console.log(respons.data);
        console.log(newDocument.filter(doc => doc.id !== id));
        dispatch(deleteDocument(newDocument.filter(doc => doc.id !== id)));
      } else {
        console.log(respons.data);
        setErrorText(respons.data.error_text);
        setErrorStatus(true)
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  
  return [
    errorText,
    errorStatus,
    deleteCell
  ]
};
