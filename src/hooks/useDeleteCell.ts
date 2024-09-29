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
    const userToken: string | null = localStorage.getItem('userToken');
    const newDocument: DocumentsReducerType = [...documents];

    deleteCellData(userToken, deleteData, id).then(function (respons) {
      if (respons.data.error_code === 0) {
        dispatch(deleteDocument(newDocument.filter(doc => doc.id !== id)));
      } else {
        setErrorText(respons.data.error_text);
        setErrorStatus(true);
      }
    }).catch(function (error) {
      if (error) {
        setErrorText(error.message);
      } else {
        setErrorText('Что-то пошло не так');
      }
      setErrorStatus(true);
      console.log(error);
    });
  }
  
  return [
    errorText,
    errorStatus,
    deleteCell
  ]
};
