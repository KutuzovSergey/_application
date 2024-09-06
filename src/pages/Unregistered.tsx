import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import MyModal from '../components/UI/MyModal/MyModal.tsx';
import LoginForm from '../components/LoginForm.tsx';
import RegistrForm from '../components/RegistrForm.tsx';

import '../styles/Unregistered.scss';

const Unregistered: FC = () => {
    
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegistr, setModalRegistr] = useState(false);

    const makeEntrance = () => {
        setModalLogin(true);
    }

    const makeRegistr = () => {
        setModalRegistr(true);
    }

    return (
        <div className="unregistered">
            <div className="unregistered__wrapper">
                <div className="unregistered__entry">
                    <Button variant="contained" size="large" onClick={makeEntrance}>вход</Button>
                </div>
                <div className="unregistered__registration">
                    <Button variant="contained" size="large" onClick={makeRegistr}>регистрация</Button>
                </div>
            </div>
            <MyModal
                active={modalLogin}
                setActive={setModalLogin}>
                <LoginForm active={setModalLogin}/>
            </MyModal>
            <MyModal
                active={modalRegistr}
                setActive={setModalRegistr}>
                <RegistrForm active={modalRegistr} setActive={setModalRegistr} />
            </MyModal>
        </div>
    )
}

export default Unregistered;