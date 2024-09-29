import React, { memo } from "react";

import cl from "./MyButtonSmall.module.scss";

type Props = {
  key?: number,
  children: string | number,
  activityIndicator?: boolean,
  onClick: () => void,
}

const MyButtonSmall: React.FC<Props> = memo(
  ({ children, activityIndicator, ...props }: Props) => {
    const classButtons = [cl.myButtonSmall];

    if (activityIndicator) {
      classButtons.push(cl.myButtonSmall__active);
    }

    return (
      <div {...props} className={classButtons.join(" ")}>
        <span className={cl.myButtonSmall__text}>{children}</span>
      </div>
    )
  }
)

export default MyButtonSmall;
