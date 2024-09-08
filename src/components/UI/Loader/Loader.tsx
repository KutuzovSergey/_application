import React from 'react';

import cl from './Loader.module.scss';

const Loader:React.FC= () => {
    return (
        <div className={cl.loader}>
            <div className="undefined__block-button">
                <div className="undefined__item undefined__item-button"></div>
            </div>
            <div className="undefined__block undefined__block-search">
                <div className="undefined__item-search"></div>
            </div>
            <div className="undefined__block">
                <div className="undefined__item"></div>
                <div className="undefined__item"></div>
                <div className="undefined__item"></div>
                <div className="undefined__item"></div>
                <div className="undefined__item"></div>
            </div>
        </div>
    )
}

export default Loader;