import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { installUser, setListDocument } from "../action/actionCreators.ts";
import { createData, getTableData } from "../AP/allRequests.ts";
import Loader from "../components/UI/Loader/Loader.tsx";
import { StateUserType } from "../type/typesStore.ts";
import TableCell from "../components/TableCell.tsx";
import { TableCellsType } from "../type/typesMain.ts";
import MyModal from "../components/UI/MyModal/MyModal.tsx";
import PostForm from "../components/PostForm.tsx";
import MyModalText from "../components/UI/MyModalText/MyModalText.tsx";

import "../styles/Home.scss";

const Home: FC = () => {
  const userName: string = useSelector(
    (state: StateUserType) => state.userData.userData.username
  );
  const tableCells: TableCellsType = useSelector(
    (state: StateUserType) => state.documents
  );
  console.log(tableCells);

  const userToken: string = localStorage.getItem("userToken");
  
  const [modalInfoHomeText, setModalInfoHomeText] = useState<string>('');
  const [modalHomeInfo, setModalHomeInfo] = useState<boolean>(false);
  const [isLoader, setLoader] = useState<boolean>(true);
  const [modalAddPost, setModalAddPost] = useState<boolean>(false);

  const dispatch = useDispatch();

  const exitApp = (): void => {
    dispatch(
      installUser({
        userData: {
          username: "",
          password: "",
        },
        isAuth: false,
        token: "",
      })
    );
    localStorage.userToken = "";
  };

  const openWindow = (): void => {
    setModalAddPost(true);
  };

  useEffect(() => {
    if (userToken !== "") {
      getTableData(userToken)
        .then(function (respons) {
          dispatch(setListDocument(respons.data.data));
          setLoader(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setLoader(true);
    }
  }, [userToken]);

  return (
    <div className="entry-form">
      {isLoader ? (
        <Loader />
      ) : (
        <div className="entry-form__wrapper">
          <div className="entry-form__exit">
            <Button variant="contained" size="large" onClick={exitApp}>
              выход
            </Button>
          </div>

          <div className="entry-form__add-post">
            <Button variant="contained" size="large" onClick={openWindow}>
              Добавить
            </Button>
          </div>
          <div className="entry-form__user-name">
            <span>{userName}</span>
          </div>
          <div className="entry-form__data">
            {tableCells.map((cell) => (
              <TableCell cell={cell} key={cell.id} />
            ))}
          </div>
        </div>
      )}

      <MyModal active={modalAddPost} setActive={setModalAddPost}>
        <PostForm
          defaultValues={null}
          urlDocument={createData}
          titleForm='Добавить новый документ'
          buttonText='добавить'
          active={modalAddPost}
          setActive={setModalAddPost}
          setModalHomeInfo={setModalHomeInfo}
          setModalInfoHomeText={setModalInfoHomeText} />
      </MyModal>

      <MyModal
        active={modalHomeInfo}
        setActive={setModalHomeInfo}>
        <MyModalText>{modalInfoHomeText}</MyModalText>
      </MyModal>
    </div>
  );
};

export default Home;
