import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const Tag: React.FC<Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={twMerge("inline-flex border border-brand-primary/30 gap-2 text-brand-primary px-3 py-1 rounded-full uppercase items-center bg-brand-primary/5", className)} {...otherProps}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
