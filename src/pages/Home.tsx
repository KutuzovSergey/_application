import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { installUser, setListDocument } from "../action/actionCreators.ts";
import { getTableData } from "../AP/allRequests.ts";
import Loader from "../components/UI/Loader/Loader.tsx";
import { StateUserType } from "../type/typesStore.ts";
import TableCell from "../components/TableCell.tsx";
import { TableCellsType } from "../type/typesMain.ts";
import MyModal from "../components/UI/MyModal/MyModal.tsx";
import AddPostForm from "../components/AddPostForm.tsx";

import "../styles/Home.scss";

const Home: FC = () => {
  const userName: string = useSelector(
    (state: StateUserType) => state.userData.userData.username
  );
  const tableCells: TableCellsType = useSelector(
    (state: StateUserType) => state.documents
  );
  
  const userToken: string = localStorage.getItem("userToken");
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
        <AddPostForm active={modalAddPost} setActive={setModalAddPost} />
      </MyModal>
    </div>
  );
};

export default Home;
