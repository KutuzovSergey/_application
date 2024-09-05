import { FC, FormEvent } from 'react';
import MyInput from '../components/UI/MyInput/MyInput.tsx';
import ErrorForm from '../components/UI/ErrorForm/ErrorForm.tsx';
import MyButton from '../components/UI/MyButton/MyButton.tsx';
import { useLoginAccount } from '../hooks/useLoginAccount.ts';
// import { UseLoginAccountType } from '../type/typesHooks.ts';
// import Button from '@mui/material/Button';

import '../styles/componentStyles/loginForm.scss';

const LoginForm: FC = () => {
    const [userData, errorText, errorStatus, changeInput, validation] = useLoginAccount();

    const submittingForm = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        console.log(errorText);
        console.log(errorStatus);
        if (validation(e)) {
            console.log('отправляем');
        }
    }

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
                        <label htmlFor="UserName " className="login-form__label">Password</label>
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
                    {/* <Button variant="contained" size="large">вход</Button> */}
                    <MyButton>вход</MyButton>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;