import { FC, useState } from 'react';
import MyButton from '../components/UI/MyButton/MyButton.tsx';
import MyModal from '../components/UI/MyModal/MyModal.tsx';
import LoginForm from '../components/LoginForm.tsx';

import '../styles/Unregistered.scss';

const Unregistered: FC = () => {
    
    const [activeModal, setActiveModal] = useState(false);
    const makeEntrance = () => {
        setActiveModal(true);
    }

    return (
        <div className="unregistered">
            <div className="unregistered__wrapper">
                <div className="unregistered__entry">
                    <MyButton onClick={makeEntrance} >вход</MyButton>
                </div>
                <div className="unregistered__registration">
                    <MyButton>регистрация</MyButton>
                </div>
            </div>
            <MyModal
                active={activeModal}
                setActive={setActiveModal}>
                <LoginForm/>
            </MyModal>
        </div>
    )
}

export default Unregistered;