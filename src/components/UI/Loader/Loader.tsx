import React from 'react';
import loader from '../../../images/icon/loader.gif';

import cl from './Loader.module.scss';

const Loader:React.FC= () => {
    return (
        <div className={cl.loader}>
            <img src={loader} alt="loader" className={cl.loader__image} />
        </div>
    )
}

export default Loader;