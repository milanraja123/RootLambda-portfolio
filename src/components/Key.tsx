import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const Key: React.FC<Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "size-14 bg-bg-soft border border-border-default inline-flex items-center justify-center rounded-2xl text-xl text-text-primary font-medium",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Key;
