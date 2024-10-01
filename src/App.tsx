import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserData, addUserToken, changeIsAuth } from "./action/actionCreators.ts";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";
import { UserDataType } from "./type/typesHooks.ts";

import "./styles/App.scss";


function App() {
  const dispatch = useDispatch();
  const setUserStatus = () => {
    if (
      localStorage.getItem("userToken") === null ||
      localStorage.getItem("userName") === null
    ) {
      localStorage.setItem("userToken", "");
      localStorage.setItem("userName", "");
      dispatch(changeIsAuth(false));
    } else {
      if (
        localStorage.getItem("userToken") !== "" ||
        localStorage.getItem("userName") !== ""
      ) {
        const userData: UserDataType = {
          username: localStorage.getItem("userName") as string,
          password: ""
        }
        dispatch(addUserData(userData));
        dispatch(changeIsAuth(true));
        dispatch(addUserToken(localStorage.getItem("userToken")));
      } else {
        dispatch(changeIsAuth(false));
      }
    }
  }
  
  useEffect(() => {
    setUserStatus();
  }, []);

  return (
    <BrowserRouter basename="/_application">
        <AppRouter />
    </BrowserRouter>
  )
}

export default App;
