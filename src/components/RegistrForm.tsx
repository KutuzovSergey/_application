import { FC, FormEvent } from 'react';
import MyInput from '../components/UI/MyInput/MyInput.tsx';
import ErrorForm from '../components/UI/ErrorForm/ErrorForm.tsx';
import MyButton from '../components/UI/MyButton/MyButton.tsx';
import { useRegistrAccount } from '../hooks/useRegistrAccount.ts';
import { useDispatch } from 'react-redux';
import { addUser, changeIsAuth } from '../action/actionCreators.ts';

import '../styles/componentStyles/loginForm.scss';

type Props = {
    active: (active: boolean) => void
}

const RegistrForm: FC = (props: Props) => {
    const [userData, errorText, errorStatus, changeInput, validation, clearForm] = useRegistrAccount();

    const dispatch = useDispatch();

    const submittingForm = (e: FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        
        if (validation(e)) {
            dispatch(addUser(userData));
            dispatch(changeIsAuth(true));
            localStorage.isAuth = true;
            props.active(false);
            clearForm();
        }
    }

    return (
        <div className="login-form">
            <div className="login-form__block">
                <span className="login-form__title">Регистрация</span>
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
                <div className='login-form__block'>
                    <div className="login-form__label-block">
                        <label htmlFor='RepeatPassword' className='login-form__label'>Repeat Password</label>
                    </div>
                    <MyInput
                        type='password'
                        name='RepeatPassword'
                        value={userData.repeatPassword}
                        placeholder='Повторите пароль'
                        onChange={changeInput} />
                    <ErrorForm bottom='-20px' left='0px' active={!errorStatus.errorRepeatPassword}>{errorText.errorRepeatPassword}</ErrorForm>
                </div>
                <div className="login-form__button">
                    <MyButton>вход</MyButton>
                </div>
            </form>
        </div>
    )
}

export default RegistrForm;