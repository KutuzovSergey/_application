import { useState, ChangeEvent, FormEvent } from 'react';
import { useAddPostType, ErrorStatusPostType, ErrorTextPostType, CheckboxFormatType } from '../type/typesHooks.ts';
import { TableCellType } from '../type/typesMain.ts';

export const useAddPost = (): useAddPostType => {

  const [newDocument, setNewDocument] = useState<TableCellType>({
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: '',
    id: "6efd0901-6110-4438-871c-9cdb70a634d3"
  });

  const [errorStatusDoc, setErrorStatusDoc] = useState<ErrorStatusPostType>({
        errorName: false,
        errorNumber: false,
        errorStatus: false,
  });
  
  const [errorText, setErrorText] = useState<ErrorTextPostType>({
        errorName: '',
        errorNumber: '',
        errorStatus: '',
  });
    
    const [checkboxFormat, setCheckboxFormat] = useState<CheckboxFormatType>({
        pdf: true,
        sig: false,
        txt: false,
    });

  const chengePost = (e: ChangeEvent<HTMLInputElement>): void => {
    const newNewDocument: TableCellType = { ...newDocument };
      const newCheckboxFormat: CheckboxFormatType = { ...checkboxFormat };
    const formElem = e.target as HTMLInputElement;
        
        switch (formElem.name) {
            case 'documentName':
                newDocument.documentName = formElem.value;
                break;
            case 'documentType':
                newDocument.employeeNumber = formElem.value;
                break;
            case 'documentStatus':
                newDocument.documentStatus = formElem.value;
                break;
            case 'pdf':
                console.log(formElem.checked);
                newCheckboxFormat.pdf = formElem.checked;
                if (newCheckboxFormat.pdf) {
                    
                }
                break;
            case 'sig':
                newCheckboxFormat.sig = formElem.checked;
                break;
            case 'txt':
                newCheckboxFormat.txt = formElem.checked;
                break;
            default:
                break;
        }
        
        setCheckboxFormat(newCheckboxFormat);
        setNewDocument(newNewDocument);
  }

      const validation = (e: FormEvent<HTMLInputElement>): boolean => {
        const form = e.target as HTMLFormElement;
        const newErrorText: ErrorTextPostType = { ...errorText };
        const newErrorStatus: ErrorStatusPostType = { ...errorStatusDoc };
        let result = 0;

        for (let i = 0; i < form.length; i++) {
            const element = form[i] as HTMLInputElement;
            const elementValue: string = element.value.trim();

            switch (element.name) {
                case 'documentName':
                    if (!elementValue) {
                        newErrorText.errorName = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorName) {
                            newErrorStatus.errorName = false;
                        }
                    } else if (elementValue.length < 3) {
                        newErrorText.errorName = 'Назван документа не может содержать меньше двух символов';
                        result = ++result;
                        if (newErrorStatus.errorName) {
                            newErrorStatus.errorName = false;
                        }
                    } else {
                        newErrorText.errorName = '';
                        if (!newErrorStatus.errorName) {
                            newErrorStatus.errorName = true;
                        }
                    }
                    break;
                case 'documentType':
                    if (!elementValue) {
                        newErrorText.errorNumber = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorNumber) {
                            newErrorStatus.errorNumber = false;
                        }
                    }
                case 'documentStatus':
                    if (!elementValue) {
                        newErrorText.errorStatus = 'Поле не может быть пустым';
                        result = ++result;
                        if (newErrorStatus.errorStatus) {
                            newErrorStatus.errorStatus = false;
                        }
                    }
                default:
                    break;
            }
        }

        setErrorText(newErrorText);
        setErrorStatusDoc(newErrorStatus);

        if (result !== 0) {
            return false
        } else {
            return true
        }
  }
  
  const clearForm = () => {
        setNewDocument({
            companySigDate: '',
            companySignatureName: '',
            documentName: '',
            documentStatus: '',
            documentType: '',
            employeeNumber: '',
            employeeSigDate: '',
            employeeSignatureName: '',
            id: ''
        });
        setErrorStatusDoc({
            errorName: false,
            errorNumber: false,
            errorStatus: false,
        });
        setErrorText({
            errorName: '',
            errorNumber: '',
            errorStatus: '',
        });
  }
  
  const addPost = () => {
    console.log(newDocument);
  }
  
  return [
    newDocument,
    errorStatusDoc,
    errorText,
    checkboxFormat,
    validation,
    chengePost,
    clearForm,
    addPost,
  ]
}
