import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  ErrorStatusType,
  UseLoginAccountType,
  UserDataType,
  ErrorTextType,
} from "../type/typesHooks";

export const useLoginAccount = (activeForm: boolean): UseLoginAccountType => {
  const [userData, setUserData] = useState<UserDataType>({
    username: "",
    password: "",
  });

  const [errorStatus, setErrorStatus] = useState<ErrorStatusType>({
    errorName: false,
    errorPassword: false,
  });

  const [errorText, setErrorText] = useState<ErrorTextType>({
    errorName: "",
    errorPassword: "",
  });

  const [errorConnection, setErrorConnection] = useState<boolean>(false);
  const [errorConnectionText, setErrorConnectionText] = useState<string>("");

  const changeInput = (e: ChangeEvent): void => {
    const newUserData: UserDataType = { ...userData };
    const formElem = e.target as HTMLInputElement;

    switch (formElem.name) {
      case "UserName":
        newUserData.username = formElem.value;
        break;
      case "UserPassword":
        newUserData.password = formElem.value;
        break;
      default:
        break;
    }

    setUserData(newUserData);
  }

  const validation = (e: FormEvent<HTMLFormElement>): boolean => {
    const form = e.target as HTMLFormElement;
    const newErrorText: ErrorTextType = { ...errorText };
    const newErrorStatus: ErrorStatusType = { ...errorStatus };
    let result = 0;

    for (let i = 0; i < form.length; i++) {
      const element = form[i] as HTMLFormElement;
      const elementValue: string = element.value.trim();

      switch (element.name) {
        case "UserName":
          if (!elementValue) {
            newErrorText.errorName = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorName) {
              newErrorStatus.errorName = false;
            }
          } else if (elementValue.length < 3) {
            newErrorText.errorName =
              "Логин не может содержать меньше двух символов";
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
        case "UserPassword":
          if (!elementValue) {
            newErrorText.errorPassword = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorPassword) {
              newErrorStatus.errorPassword = false;
            }
          } else if (elementValue.length < 6) {
            newErrorText.errorPassword =
              "Пароль не может содержать меньше пяти символов";
            result = ++result;
            if (newErrorStatus.errorPassword) {
              newErrorStatus.errorPassword = false;
            }
          } else {
            newErrorText.errorPassword = "";
            if (!newErrorStatus.errorPassword) {
              newErrorStatus.errorPassword = true;
            }
          }
        default:
          break;
      }
    }

    setErrorText(newErrorText);
    setErrorStatus(newErrorStatus);

    if (result !== 0) {
      return false
    } else {
      return true
    }
  }

  const returnFormState = (): void => {
    setErrorConnection(false);
    setErrorConnectionText("");
  }

  const clearForm = () => {
    setUserData({
      username: "",
      password: "",
    });
    setErrorStatus({
      errorName: false,
      errorPassword: false,
    });
    setErrorText({
      errorName: "",
      errorPassword: "",
    });
  }

  const showPasswordError = () => {
      const newErrorText = { ...errorText };
      const newErrorStatus = { ...errorStatus };

      newErrorText.errorName = "неправильный логин или пароль";
      newErrorText.errorPassword = "неправильный логин или пароль";
      newErrorStatus.errorName = false;
      newErrorStatus.errorPassword = false;

      setErrorText(newErrorText);
      setErrorStatus(newErrorStatus);
  }

  useEffect(() => {
    if (!activeForm) {
      clearForm();
      if (setErrorConnection) {
        setErrorConnection(false);
        setErrorConnectionText("");
      }
    }
  }, [activeForm]);

  return [
    userData,
    errorText,
    errorStatus,
    errorConnection,
    errorConnectionText,
    changeInput,
    validation,
    clearForm,
    returnFormState,
    setErrorConnection,
    setErrorConnectionText,
    showPasswordError,
  ]
}
