import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index.tsx';
import Button from '@mui/material/Button';
import MyButton from '../components/UI/MyButton/MyButton.tsx';
import MyTextarea from '../components/UI/MyTextarea/MyTextarea.tsx';
import { useAddPost } from '../hooks/useAddPost.ts';
import { changeIsAuth, addUser } from '../action/actionCreators.ts';
import { getTableData } from '../AP/allRequests.ts';

import '../styles/Home.scss';

const Home: FC = () => {
    const userName: string = useSelector((state: RootState) => state.userData.username)
    const { newEntry, chengePost, addPost, } = useAddPost();
    const dispatch = useDispatch();

    const exitApp = (): void => {
        dispatch(changeIsAuth(false));
        dispatch(addUser({username: '',  password: ''}));
        localStorage.isAuth = false;
    }

    useEffect(() => {
        const dataTable = getTableData();
        
        dataTable.then(
            result => console.log(result),
            error => console.log(error)
        )
        console.log();
    })
    
    return (
        <div className="entry-form">
            <div className="entry-form__exit">
                <Button variant="contained" size="large" onClick={exitApp}>выход</Button>
            </div>
            
            <div className="entry-form__user-name">
                <span>{userName}</span>
            </div>
            <div className="entry-form__add-post">
                <MyTextarea
                    value={newEntry}
                    placeholder="текст записи"
                    onChange={chengePost} />
                <MyButton onClick={addPost}>Добавить</MyButton>
            </div>
            <div className="entry-form__data"></div>
            
        </div>
    )
}

export default Home;