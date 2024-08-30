import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const linearImmediateUnlockConfig = {
  functionType: 0,
  cliff: 0,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 2500,
};

const LinearImmediateUnlockPlot = ({ config }) => {
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlockPercentage = config.afterCliffBasisPoints / 100;
  const vestingFunction = `${immediateUnlockPercentage} + (x / ${durationDays}) * (100 - ${immediateUnlockPercentage})`;

  return (
    <FunctionPlot
      options={{
        xAxisLabel: "Days",
        yAxisLabel: "% - Tokens",
        xDomainLimit: durationDays,
        yDomainLimit: 100,
        data: [{ fn: vestingFunction, color: "#f77423" }],
      }}
    />
  );
};

export default LinearImmediateUnlockPlot;
