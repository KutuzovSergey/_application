import React from 'react';

import cl from './Loader.module.scss';

const Loader: React.FC = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.loader__block_button}>
                <div className={cl.loader__item_button}></div>
            </div>
            <div className={cl.loader__block_search}>
                <div className={cl.loader__item_search}>
                    <div className={cl.loader__search}></div>
                </div>
            </div>
            <div className={cl.loader__block_table}>
                <div className={cl.loader__item}>
                    <div className={cl.loader__item}></div>
                </div>
                <div className = {cl.loader__item} ></div>
                <div className = {cl.loader__item}></div>
                <div className = {cl.loader__item} ></div>
                <div className={cl.loader__item}></div>
            </div>
            <span className={cl.loader__animation}></span>
            
        </div>
    )
}

export default Loader;