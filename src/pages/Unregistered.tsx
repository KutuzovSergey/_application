import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import MyModal from "../components/UI/MyModal/MyModal.tsx";
import LoginForm from "../components/LoginForm.tsx";
import RegistrForm from "../components/RegistrForm.tsx";
import MyTitle from "../components/UI/MyTitle/MyTitle.tsx";

import "../styles/Unregistered.scss";

const Unregistered: FC = () => {
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegistr, setModalRegistr] = useState<boolean>(false);

  const makeEntrance = () => {
    setModalLogin(true);
  }

  const makeRegistr = () => {
    setModalRegistr(true);
  }

  return (
    <div className="unregistered">
      <div className="unregistered__title">
        <MyTitle>Для продолжения работы с приложением выполните вход или регистрацию</MyTitle>
      </div>
      <div className="unregistered__wrapper">
        <div className="unregistered__entry">
          <Button variant="contained" size="large" onClick={makeEntrance}>
            вход
          </Button>
        </div>
        <div className="unregistered__registration">
          <Button variant="contained" size="large" onClick={makeRegistr}>
            регистрация
          </Button>
        </div>
      </div>
      <MyModal active={modalLogin} setActive={setModalLogin}>
        <LoginForm active={modalLogin} setActive={setModalLogin} />
      </MyModal>
      <MyModal active={modalRegistr} setActive={setModalRegistr}>
        <RegistrForm active={modalRegistr} setActive={setModalRegistr} />
      </MyModal>
    </div>
  )
}

export default Unregistered;
