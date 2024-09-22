import React, { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { OptionsSelectType, TableCellType } from "../type/typesMain.ts";
import MySelect from "../components/UI/MySelect/MySelect.tsx";
import MyModal from "./UI/MyModal/MyModal.tsx";
import { useDeleteCell } from "../hooks/useDeleteCell.ts";
import MyModalText from "./UI/MyModalText/MyModalText.tsx";
import PostForm from "./PostForm.tsx";
import { changeData } from "../AP/allRequests.ts";

import "../styles/componentStyles/TableCell.scss";

type Props = {
  cell: TableCellType;
};

const TableCell: FC = (props: Props) => {
  const [errorText, errorStatus, deleteCell] = useDeleteCell(props.cell.id);
  const [modalInfo, setModalInfo] = useState<boolean>(false);
  const [modalInfoText, setModalInfoText] = useState<string>("");
  const [modalChange, setModalChange] = useState<boolean>(false);

  const openModalInfo = () => {
    setModalInfo(true);
    setModalInfoText("Эта функция пока не доступна");
  };

  const openModalChange = () => {
    setModalChange(true);
  };

  useEffect(() => {
    if (errorStatus) {
      setModalInfo(errorStatus);
      setModalInfoText(errorText);
    } else {
      setModalInfo(false);
      setModalInfoText("");
    }
  }, [errorStatus]);

  const optionFotmats: OptionsSelectType[] = [
    {
      name: props.cell.companySignatureName,
      value: props.cell.companySignatureName,
    },
    {
      name: props.cell.documentName,
      value: props.cell.documentName,
    },
  ];

  const selectFormat = (e: string): void => {
    console.log(e);
  };

  return (
    <div className="table-cell" id={props.cell.id}>
      <div className="table-cell__info">
        <div className="table-cell__wrapper">
          <div className="table-cell__data table-cell__block">
            <span>Дата: {props.cell.companySigDate}</span>
          </div>
          <div className="table-cell__status table-cell__block">
            <span>Статус: {props.cell.documentStatus}</span>
          </div>
        </div>
        <div className="table-cell__wrapper">
          <div className="table-cell__document-type table-cell__block">
            <span>{props.cell.documentType}</span>
          </div>
          <div className="table-cell__number table-cell__block">
            <span>Номер документа: {props.cell.employeeNumber}</span>
          </div>
        </div>
      </div>

      <div className="table-cell__tools">
        <div className="table-cell__formats">
          <MySelect
            value=""
            options={optionFotmats}
            defaultValue={"выберите формат"}
            onChange={selectFormat}
          />
        </div>
        <div className="table-cell__button">
          <div className="table-cell__delete">
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              onClick={() => deleteCell(props.cell.id)}
            >
              <ClearIcon />
            </IconButton>
          </div>
          <div className="table-cell__download">
            <Button onClick={() => openModalInfo()}>скачать</Button>
          </div>
          <div className="table-cell__download">
            <Button onClick={() => openModalChange()}>изменить</Button>
          </div>
        </div>
      </div>
      <MyModal active={modalInfo} setActive={setModalInfo}>
        <MyModalText>{modalInfoText}</MyModalText>
      </MyModal>
      <MyModal active={modalChange} setActive={setModalChange}>
        <PostForm
          defaultValues={props.cell}
          urlDocument={changeData}
          titleForm='Внести изменения в документ'
          buttonText='изменить'
          active={modalChange}
          setActive={setModalChange}
          setModalHomeInfo={setModalInfo}
          setModalInfoHomeText={setModalInfoText}
        />
      </MyModal>
    </div>
  );
};

export default TableCell;
