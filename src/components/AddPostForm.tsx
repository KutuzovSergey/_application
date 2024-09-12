import { FC, FormEvent, useEffect } from 'react';
import MyInput from './UI/MyInput/MyInput.tsx';
import ErrorForm from './UI/ErrorForm/ErrorForm.tsx';
import MyButton from './UI/MyButton/MyButton.tsx';
import { useLoginAccount } from '../hooks/useLoginAccount.ts';
// import { UseLoginAccountType } from '../type/typesHooks.ts';
import { useDispatch } from 'react-redux';
import { addUser, changeIsAuth } from '../action/actionCreators.ts';

import '../styles/componentStyles/AddPostForm.scss';

type Props = {
    active: boolean,
    setActive: (active: boolean) => void
}

const AddPostForm: FC = (props: Props) => {
    const [userData, errorText, errorStatus, changeInput, validation, clearForm] = useLoginAccount();

    const dispatch = useDispatch();

    const submittingForm = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();

        if (validation(e)) {
            dispatch(addUser(userData));
            dispatch(changeIsAuth(true));
            localStorage.userToken = '';
        props.setActive(false);
        clearForm();
    }
}

useEffect(() => {
    if (!props.active) {
        clearForm();
    }
}, [props.active]);

return (
    <div className="login-form">
        <div className="login-form__block">
            <span className="login-form__title">Войти</span>
        </div>
        <form className="login-form__wtapper" onSubmit={submittingForm}>
            <div className="login-form__block">
                <div className="login-form__label-block">
                    <label htmlFor="UserName" className="login-form__label">User name</label>
                </div>
                <MyInput
                    type='text'
                    name='UserName'
                    value={userData.userName}
                    placeholder='Ваше имя'
                    onChange={changeInput} />
                <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorName}>{errorText.errorName}</ErrorForm>
            </div>
            <div className="login-form__block">
                <div className="login-form__label-block">
                    <label htmlFor="UserPassword " className="login-form__label">Password</label>
                </div>
                <MyInput
                    type='password'
                    name='UserPassword'
                    value={userData.userPassword}
                    placeholder='Пароль'
                    onChange={changeInput} />
                <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorPassword}>{errorText.errorPassword}</ErrorForm>
            </div>
            <div className="login-form__button">
                <MyButton>вход</MyButton>
            </div>
        </form>
    </div>
)
}

export default AddPostForm;