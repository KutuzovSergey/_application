import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserName, changeIsAuth } from './action/actionCreators.ts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.tsx';

import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const setUserStatus = () => {
    // console.log(localStorage.getItem('userToken'));
    // console.log(localStorage.getItem('userName'));
    // console.log(localStorage.getItem('userName') === '');
    if (localStorage.getItem('userToken') === '' && localStorage.getItem('userName') === '') {
      if (localStorage.getItem('userToken') === '' && localStorage.getItem('userName') === '') {
        dispatch(changeIsAuth(false));
        dispatch(addUserName(localStorage.getItem('userName')))
       } else {
        dispatch(changeIsAuth(true));
       }
    } else {
      localStorage.setItem('userToken', '');
      localStorage.setItem('userName', '');
      dispatch(changeIsAuth(false));
    }
  }
  localStorage.userToken = ''
  useEffect(() => { setUserStatus() }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
