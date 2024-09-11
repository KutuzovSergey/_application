import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsAuth } from './action/actionCreators.ts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.tsx';

import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const setUserStatus = () => {
    if (localStorage.getItem('userToken') !== null) {
      // console.log(localStorage.getItem('userToken'));
      if(localStorage.getItem('userToken') === ''){
          dispatch(changeIsAuth(false));
       } else {
        dispatch(changeIsAuth(true));
       }
    } else {
      localStorage.setItem('userToken', '');
      dispatch(changeIsAuth(false));
    }
  }
  // localStorage.userToken = ''
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
