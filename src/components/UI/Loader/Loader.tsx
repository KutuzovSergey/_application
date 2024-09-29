import React from "react";

import cl from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={cl.loader}>
      <div className={cl.loader__wrapper}>
        <div className={cl.loader__block_button}>
          <div className={cl.loader__item_button}></div>
        </div>
        <div className={cl.loader__block_button_second}>
          <div className={cl.loader__item_button}></div>
        </div>
        <div className={cl.loader__block_table}>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
          <div className={cl.loader__item}></div>
        </div>
        <span className={cl.loader__animation}></span>
      </div>
    </div>
  )
}

export default Loader;
