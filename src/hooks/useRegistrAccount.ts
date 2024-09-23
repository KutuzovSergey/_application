import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  ErrorStatusRegistrType,
  UseRegistrAccountType,
  UserDataType,
  ErrorTextRegistrType,
} from "../type/typesHooks";

export const useRegistrAccount = (
  activeForm: boolean
): UseRegistrAccountType => {
  const [userData, setUserData] = useState<UserDataType>({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [errorStatus, setErrorStatus] = useState<ErrorStatusRegistrType>({
    errorName: false,
    errorPassword: false,
    errorRepeatPassword: false,
  });

  const [errorText, setErrorText] = useState<ErrorTextRegistrType>({
    errorName: "",
    errorPassword: "",
    errorRepeatPassword: "",
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
      case "RepeatPassword":
        newUserData.repeatPassword = formElem.value;
        break;
      default:
        break;
    }

    setUserData(newUserData);
  };

  const validation = (e: FormEvent<HTMLInputElement>): boolean => {
    const form = e.target as HTMLFormElement;
    const newErrorText: ErrorTextRegistrType = { ...errorText };
    const newErrorStatus: ErrorStatusRegistrType = { ...errorStatus };
    let result = 0;

    for (let i = 0; i < form.length; i++) {
      const element = form[i] as HTMLInputElement;
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
          } else if (elementValue !== userData.repeatPassword) {
            newErrorText.errorPassword = "Пароли не совпадают";
            newErrorText.errorRepeatPassword = "Пароли не совпадают";
            console.log(newErrorText);
            result = ++result;
            if (
              newErrorStatus.errorPassword ||
              newErrorStatus.errorRepeatPassword
            ) {
              newErrorStatus.errorPassword = false;
              newErrorStatus.errorRepeatPassword = false;
            }
          } else {
            newErrorText.errorPassword = "";
            if (!newErrorStatus.errorPassword) {
              newErrorStatus.errorPassword = true;
            }
          }
        case "RepeatPassword":
          if (!elementValue) {
            newErrorText.errorRepeatPassword = "Поле не может быть пустым";
            result = ++result;
            if (newErrorStatus.errorRepeatPassword) {
              newErrorStatus.errorRepeatPassword = false;
            }
          } else if (elementValue !== userData.password) {
            newErrorText.errorPassword = "Пароли не совпадают";
            newErrorText.errorRepeatPassword = "Пароли не совпадают";
            result = ++result;
            if (
              newErrorStatus.errorRepeatPassword ||
              newErrorStatus.errorPassword
            ) {
              newErrorStatus.errorPassword = false;
              newErrorStatus.errorRepeatPassword = false;
            }
          } else {
            newErrorText.errorRepeatPassword = "";
            if (!newErrorStatus.errorRepeatPassword) {
              newErrorStatus.errorRepeatPassword = true;
            }
          }
        default:
          break;
      }
    }

    setErrorText(newErrorText);
    setErrorStatus(newErrorStatus);

    if (result !== 0) {
      return false;
    } else {
      return true;
    }
  };

  const returnFormState = (): void => {
    setErrorConnection(false);
    setErrorConnectionText("");
  };

  const clearForm = () => {
    setUserData({
      username: "",
      password: "",
      repeatPassword: "",
    });
    setErrorStatus({
      errorName: false,
      errorPassword: false,
      errorRepeatPassword: false,
    });
    setErrorText({
      errorName: "",
      errorPassword: "",
      errorRepeatPassword: "",
    });
  };

    const showPasswordError = () => {
      const newErrorText = { ...errorText };
      const newErrorStatus = { ...errorStatus };

      newErrorText.errorName = "неправильный логин или пароль";
      newErrorText.errorPassword = "неправильный логин или пароль";
      newErrorText.errorRepeatPassword = "что то не так с логином или паролем";
      newErrorStatus.errorName = false;
      newErrorStatus.errorPassword = false;
      newErrorStatus.errorRepeatPassword = false;

      setErrorText(newErrorText);
      setErrorStatus(newErrorStatus);
  };

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
  ];
};
