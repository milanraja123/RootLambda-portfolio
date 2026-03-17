"use client";
import { IntegrationType } from "@/sections/Integrations";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type Props = {
  integrations: IntegrationType;
  className?: string;
  reverse?: boolean;
};

const IntegrationColumn: React.FC<Props> = (props) => {
  const { integrations, className, reverse } = props;

  return (
    <>
      <motion.div
        initial={{
          y: reverse ? "-50%" : "0",
        }}
        animate={{
          y: reverse ? 0 : "-50%",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className={twMerge("flex flex-col gap-4 pb-4", className)}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <Fragment key={i}>
            {integrations?.map((integration) => (
              <div
                key={integration.name}
                className="bg-white dark:bg-bg-card border border-border-default rounded-3xl p-6 hover:border-brand-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex justify-center">
                  <span className="text-6xl">{integration.icon}</span>
                </div>
                <h3 className="text-3xl text-center mt-6 text-text-primary">
                  {integration.name}
                </h3>
                <p className="text-center text-text-secondary mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </>
  );
};

export default IntegrationColumn;
