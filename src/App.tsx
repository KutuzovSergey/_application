import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeIsAuth } from './action/actionCreators.ts';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter.tsx';

import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const setUserStatus = () => {
    if (localStorage.getItem('isAuth') !== null) {
      const valueIsAuth: string = localStorage.getItem('isAuth')!;
      dispatch(changeIsAuth(JSON.parse(valueIsAuth)));
    } else {
      localStorage.setItem('isAuth', 'false');
    }
  }

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
