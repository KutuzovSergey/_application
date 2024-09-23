import { FC, FormEvent, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRegistrAccount } from "../hooks/useRegistrAccount.ts";
import { authorizationsUser } from "../AP/allRequests.ts";
import { dataPreparation } from "../utils/createUserNumber.ts";
import { useLegalization } from "../hooks/useLegalization.ts";
import MyInput from "../components/UI/MyInput/MyInput.tsx";
import ErrorForm from "../components/UI/ErrorForm/ErrorForm.tsx";
import MyButton from "../components/UI/MyButton/MyButton.tsx";
import MyModalText from "./UI/MyModalText/MyModalText.tsx";

import "../styles/componentStyles/Form.scss";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const RegistrForm: FC = (props: Props) => {
  const [userToken, setUserToken] = useState<string>("");
  const [
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
    setSomethingWentWrong,
  ] = useRegistrAccount(props.active);

  const [userLegalization] = useLegalization(
    userToken,
    userData,
    props.setActive,
    clearForm
  );

  const submittingForm = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (validation(e)) {
      const user: string = dataPreparation(userData, 13);
      authorizationsUser(user)
        .then(function (respons) {
          if (respons.data.data.token) {
            setUserToken(respons.data.data.token);
          } else {
            setSomethingWentWrong(true);
          }
        })
        .catch(function (error) {
          if (error.code === "ERR_NETWORK") {
            setErrorConnection(true);
            setErrorConnectionText("Ошибка. Проверьте интернет соединение.");
          } else {
            setSomethingWentWrong(true);
            setErrorConnectionText(error);
          }
          console.log(error);
        });
    }
  };

  useEffect(() => {
    userLegalization();
  }, [userToken]);

  return errorConnection ? (
    <div className="form-message">
      <MyModalText>{errorConnectionText}</MyModalText>

      <div className="form-message__button">
        <Button onClick={() => returnFormState()}>
          отправить форму повторно
        </Button>
      </div>
    </div>
  ) : (
    <div className="form">
      <div className="form__block">
        <span className="form__title">Регистрация</span>
      </div>
      <form className="form__wtapper" onSubmit={submittingForm}>
        <div className="form__block">
          <div className="form__label-block">
            <label htmlFor="UserName" className="form__label">
              User name
            </label>
          </div>
          <MyInput
            type="text"
            name="UserName"
            value={userData.userName}
            placeholder="Ваше имя"
            onChange={changeInput}
          />
          <ErrorForm bottom="-20px" left="0px" active={!errorStatus.errorName}>
            {errorText.errorName}
          </ErrorForm>
        </div>
        <div className="form__block">
          <div className="form__label-block">
            <label htmlFor="UserPassword " className="form__label">
              Password
            </label>
          </div>
          <MyInput
            type="password"
            name="UserPassword"
            value={userData.userPassword}
            placeholder="Пароль"
            onChange={changeInput}
          />
          <ErrorForm
            bottom="-20px"
            left="0px"
            active={!errorStatus.errorPassword}
          >
            {errorText.errorPassword}
          </ErrorForm>
        </div>
        <div className="form__block">
          <div className="form__label-block">
            <label htmlFor="RepeatPassword" className="form__label">
              Repeat Password
            </label>
          </div>
          <MyInput
            type="password"
            name="RepeatPassword"
            value={userData.repeatPassword}
            placeholder="Повторите пароль"
            onChange={changeInput}
          />
          <ErrorForm
            bottom="-20px"
            left="0px"
            active={!errorStatus.errorRepeatPassword}
          >
            {errorText.errorRepeatPassword}
          </ErrorForm>
        </div>
        <div className="form__button">
          <MyButton>вход</MyButton>
        </div>
      </form>
    </div>
  );
};

export default RegistrForm;
