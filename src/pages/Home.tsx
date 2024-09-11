import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index.tsx';
import Button from '@mui/material/Button';
import MyButton from '../components/UI/MyButton/MyButton.tsx';
import MyTextarea from '../components/UI/MyTextarea/MyTextarea.tsx';
import { useAddPost } from '../hooks/useAddPost.ts';
import { changeIsAuth, addUser } from '../action/actionCreators.ts';
import { getTableData, authorizationsUser } from '../AP/allRequests.ts';
import Loader from '../components/UI/Loader/Loader.tsx';
import { StateUserType } from '../type/typesStore.ts';
import { store } from '../store/index.ts';

import '../styles/Home.scss';

const Home: FC = () => {
    const userName: string = useSelector((state: StateUserType) => state.userData.username);
    // const userToken: string = useSelector((state: StateUserType): string => state.userData.token);
    const userToken: string = localStorage.getItem('userToken');
    const { newEntry, chengePost, addPost, } = useAddPost();
    const [isLoader, setLoader] = useState<boolean>(true);
    
    const dispatch = useDispatch();

    const exitApp = (): void => {
        dispatch(changeIsAuth(false));
        dispatch(addUser({username: '',  password: ''}));
        localStorage.userToken = '';
    }

    store.subscribe(() => console.log(store.getState()));
    // setLoader(false);
    useEffect(() => {
        // console.log(userToken);
        if (userToken !== '') {
            // authorizationsUser(userToken).then(function (respons) {
            //     console.log(respons);
            // })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            getTableData(userToken).then(function (respons) {
                console.log(respons.data.data);
                return respons.data
            })
                .catch(function (error) {
                    console.log(error);
                    return ''
                });
            // console.log(userToken);
            setLoader(false);
        } else {
            setLoader(true);
        }
    }, [userToken]);
    
    return (
        <div className="entry-form">
            {isLoader ? 
                    <Loader/>
                :
                <div className="entry-form__wrapper">
                    
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
            }
        </div>
    )
}

export default Home;