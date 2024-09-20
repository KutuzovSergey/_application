import { FC, FormEvent, useEffect } from 'react';
import MyInput from './UI/MyInput/MyInput.tsx';
import ErrorForm from './UI/ErrorForm/ErrorForm.tsx';
import MyButton from './UI/MyButton/MyButton.tsx';
import { useAddPost } from '../hooks/useAddPost.ts';
import { createData } from '../AP/allRequests.ts';

import '../styles/componentStyles/Form.scss';

type Props = {
    active: boolean,
    setActive: (active: boolean) => void,
    setModalHomeInfo: (active: boolean) => void,
    setModalInfoHomeText: (text: string) => void
}

const AddPostForm: FC = (props: Props) => {

    const [newDocument,
        errorStatus,
        errorText,
        checkboxFormat,
        errorMessage,
        errorMessageStatus,
        validation,
        chengePost,
        clearForm,
        addPost] = useAddPost();

    const submittingForm = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        if (validation(e)) {
            addPost(createData);
            clearForm();
            props.setActive(false);
    }
}

useEffect(() => {
    if (!props.active) {
        clearForm();
    }
}, [props.active]);
    
useEffect(() => {
    if (errorMessageStatus) {
        props.setModalHomeInfo(true);
        props.setModalInfoHomeText(errorMessage);
    }
}, [errorMessageStatus])

return (
    <div className="form">
        <div className="form__block">
            <span className="form__title">Добавить новый документ</span>
        </div>
        <form className="form__wtapper" onSubmit={submittingForm}>

            <div className="form__block">
                <div className="form__label-block">
                    <label htmlFor="documentType" className="form__label">Наименование документа</label>
                </div>
                <MyInput
                    type='text'
                    name='documentName'
                    value={newDocument.documentName}
                    placeholder='например: Трудовой договор'
                    onChange={chengePost} />
                <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorName}>{errorText.errorName}</ErrorForm>
            </div>

            <div className="form__block">
                <div className="form__label-block">
                    <label htmlFor="documentType" className="form__label">Номер документа</label>
                </div>
                <MyInput
                    type='text'
                    name='documentType'
                    value={newDocument.employeeNumber}
                    placeholder='номер'
                    onChange={chengePost} />
                <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorNumber}>{errorText.errorNumber}</ErrorForm>
            </div>

            <div className="form__block">
                <div className="form__label-block">
                    <label htmlFor="UserPassword " className="form__label">Статус документа</label>
                </div>
                <MyInput
                    type='text'
                    name='documentStatus'
                    value={newDocument.documentStatus}
                    placeholder='Статус'
                    onChange={chengePost} />
                <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorStatus}>{errorText.errorStatus}</ErrorForm>
            </div>

            <div className="form__block">
                <div className="form__block-titel">
                    <span className='form__label'>Выберите один или два из доступных форматов</span>
                </div>

                <div className="form__formats">
                    <div className="form__format">
                        <input type="checkbox" checked={checkboxFormat.pdf} id="pdf" value=".pdf" name="pdf" onChange={chengePost} />
                        <label className="form__label-checkbox" htmlFor="format_pdf">.pdf</label>
                    </div>

                    <div className="form__format">
                        <input type="checkbox" checked={checkboxFormat.sig} id="sig" value=".sig" name="sig" onChange={chengePost} />
                        <label className="form__label-checkbox" htmlFor="format_sig">.sig</label>
                    </div>
                    <ErrorForm bottom='-20px' left='15%' active={!errorStatus.errorFormat}>{errorText.errorFormat}</ErrorForm>
                </div>
            </div>
            

            <div className="form__button">
                <MyButton>вход</MyButton>
            </div>
        </form>
    </div>
)
}

export default AddPostForm;