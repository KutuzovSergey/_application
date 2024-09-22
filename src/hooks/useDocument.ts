import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  UseDocumentType,
  ErrorStatusPostType,
  ErrorTextPostType,
  CheckboxFormatType,
} from "../type/typesHooks.ts";
import { TableCellType } from "../type/typesMain.ts";
import { generateRandomNum } from "../utils/generateRandomNum.ts";
import { useDispatch, useSelector } from "react-redux";
import { StateUserType } from "../type/typesStore.ts";
import { workingWithTableData } from "../AP/allRequests.ts";
import { addDocument, changeDocument } from "../action/actionCreators.ts";

export const useDocument = (
  defaultValues: TableCellType | null,
  active: boolean
): UseDocumentType => {
  const userName: string = useSelector(
    (state: StateUserType) => state.userData.userData.username
  );
  const userToken: string = useSelector(
    (state: StateUserType) => state.userData.token
  );
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessageStatus, setErrorMessageStatus] = useState<boolean>(false);

  const [newDocument, setNewDocument] = useState<TableCellType>({
    companySigDate: "",
    companySignatureName: "",
    documentName: "",
    documentStatus: "",
    documentType: "",
    employeeNumber: "",
    employeeSigDate: "",
    employeeSignatureName: "",
    id: "",
  });

  const [errorStatusDoc, setErrorStatusDoc] = useState<ErrorStatusPostType>({
    errorName: false,
    errorNumber: false,
    errorStatus: false,
    errorFormat: false,
  });

  const [errorText, setErrorText] = useState<ErrorTextPostType>({
    errorName: "",
    errorNumber: "",
    errorStatus: "",
    errorFormat: "",
  });

  const [checkboxFormat, setCheckboxFormat] = useState<CheckboxFormatType>({
    pdf: true,
    sig: false,
  });

  const prepareShipment = (username: string): TableCellType => {
    const newNewDocument: TableCellType = { ...newDocument };

    if (defaultValues === null) {
      const newDocumentName: string = newNewDocument.documentName;
      const todaysDate = new Date().toISOString();

      newNewDocument.id = `${generateRandomNum(
        99999999,
        9999999
      )}-${generateRandomNum(9999, 999)}-${generateRandomNum(
        9999,
        999
      )}-${generateRandomNum(9999, 999)}-${generateRandomNum(
        999999999999,
        99999999999
      )}`;

      if (checkboxFormat.pdf && checkboxFormat.sig) {
        newNewDocument.documentName = `${newDocumentName}.pdf`;
        newNewDocument.documentType = `${newDocumentName}.sig`;
      } else if (checkboxFormat.sig) {
        newNewDocument.documentName = `${newDocumentName}.sig`;
        newNewDocument.documentType = `${newDocumentName}.sig`;
      } else if (checkboxFormat.pdf) {
        newNewDocument.documentName = `${newDocumentName}.pdf`;
        newNewDocument.documentType = `${newDocumentName}.pdf`;
      }

      newNewDocument.companySigDate = todaysDate;
      newNewDocument.employeeSignatureName = username;

      return newNewDocument;
    } else {
      return newNewDocument
    }
  };

  const chengePost = (e: ChangeEvent<HTMLInputElement>): void => {
    const newNewDocument: TableCellType = { ...newDocument };
    const newCheckboxFormat: CheckboxFormatType = { ...checkboxFormat };
    const formElem = e.target as HTMLInputElement;

    switch (formElem.name) {
      case "documentName":
        newNewDocument.documentName = formElem.value;
        break;
      case "documentType":
        newNewDocument.employeeNumber = formElem.value;
        break;
      case "documentStatus":
        newNewDocument.documentStatus = formElem.value;
        break;
      case "pdf":
        newCheckboxFormat.pdf = formElem.checked;
        break;
      case "sig":
        newCheckboxFormat.sig = formElem.checked;
        break;
      default:
        break;
    }

    setCheckboxFormat(newCheckboxFormat);
    setNewDocument(newNewDocument);
  };

  const validation = (e: FormEvent<HTMLInputElement>): boolean => {
    const form = e.target as HTMLFormElement;
    const newErrorText: ErrorTextPostType = { ...errorText };
    const newErrorStatus: ErrorStatusPostType = { ...errorStatusDoc };
    let result = 0;

    for (let i = 0; i < form.length; i++) {
      const element = form[i] as HTMLInputElement;
      const elementValue: string = element.value.trim();

      switch (element.name) {
        case "documentName":
          if (!elementValue) {
            newErrorText.errorName = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorName) {
              newErrorStatus.errorName = false;
            }
          } else if (elementValue.length < 3) {
            newErrorText.errorName =
              "Назван документа не может содержать меньше двух символов";
            result = ++result;
            if (newErrorStatus.errorName) {
              newErrorStatus.errorName = false;
            }
          } else {
            newErrorText.errorName = "";
            if (!newErrorStatus.errorName) {
              newErrorStatus.errorName = true;
            }
          }
          break;
        case "documentType":
          if (!elementValue) {
            newErrorText.errorNumber = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorNumber) {
              newErrorStatus.errorNumber = false;
            }
          }
        case "documentStatus":
          if (!elementValue) {
            newErrorText.errorStatus = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorStatus) {
              newErrorStatus.errorStatus = false;
            }
          }
        case "pdf" || "sig":
          if (!(checkboxFormat.pdf || checkboxFormat.sig)) {
            newErrorText.errorFormat =
              "Выберите один или оба из предложенных форматов";
            newErrorStatus.errorFormat = false;
          } else if (checkboxFormat.pdf || checkboxFormat.sig) {
            newErrorText.errorFormat = "";
            newErrorStatus.errorFormat = true;
          }
        default:
          break;
      }
    }

    setErrorText(newErrorText);
    setErrorStatusDoc(newErrorStatus);

    if (result !== 0) {
      return false;
    } else {
      return true;
    }
  };

  const clearForm = () => {
    setNewDocument({
      companySigDate: "",
      companySignatureName: "",
      documentName: "",
      documentStatus: "",
      documentType: "",
      employeeNumber: "",
      employeeSigDate: "",
      employeeSignatureName: "",
      id: "",
    });
    setErrorStatusDoc({
      errorName: false,
      errorNumber: false,
      errorStatus: false,
      errorFormat: false,
    });
    setErrorText({
      errorName: "",
      errorNumber: "",
      errorStatus: "",
      errorFormat: "",
    });
  };

  const addPost = (url: string) => {
    let idUrl: string = '';

    if (defaultValues !== null) {
      idUrl = defaultValues.id;
    }
    workingWithTableData(userToken, url, prepareShipment(userName), idUrl)
      .then(function (respons) {
        if (respons.data.data) {
          console.log(respons.data.data);
          console.log(defaultValues !== null);
          defaultValues !== null ? dispatch(changeDocument([respons.data.data])) : dispatch(addDocument([respons.data.data]));
        } else {
          setErrorMessage(respons.data.error_text);
          setErrorMessageStatus(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (defaultValues !== null) {
      setNewDocument(defaultValues);
    }
  }, [active]);

  return [
    newDocument,
    errorStatusDoc,
    errorText,
    checkboxFormat,
    errorMessage,
    errorMessageStatus,
    validation,
    chengePost,
    clearForm,
    addPost,
  ];
};
