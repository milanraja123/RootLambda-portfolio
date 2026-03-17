import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

const FeatureCard: React.FC<Props> = (props) => {
  const { title, description, children, className } = props;
  return (
    <div
      className={twMerge(
        "bg-white dark:bg-bg-card border border-border-default p-6 rounded-3xl hover:border-brand-primary/30 hover:shadow-card transition-all duration-300",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6 text-text-primary">{title}</h3>
        <p className="text-text-secondary mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
