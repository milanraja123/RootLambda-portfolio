import React from "react";
import { cva } from "class-variance-authority";

type Props = {
  variant: "primary" | "secondary";
  size?: "sm";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const classes = cva("border h-12 rounded-full px-6 font-medium transition-all duration-300", {
  variants: {
    variant: {
      primary: "bg-gradient-brand text-white border-transparent hover:shadow-lg hover:shadow-brand-primary/25",
      secondary: "border-border-default text-text-primary bg-white dark:bg-bg-card hover:border-brand-primary hover:text-brand-primary",
    },
    size: {
      sm: "h-10",
    },
  },
});

const Button: React.FC<Props> = (props) => {
  const { variant, className,size,...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
};

export default Button;
