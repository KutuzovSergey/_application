import React, { FC } from "react";

import cl from "./MyTitle.module.scss";

type Props = {
  children: string,
}

const MyTitle: FC<Props> = ({ children }: Props) => {
  return (
    <div className={cl.title}>
      <span className={cl.title__text}>{children}</span>
    </div>
  )
}

export default MyTitle;
