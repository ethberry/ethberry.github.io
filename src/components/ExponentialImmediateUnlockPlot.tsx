import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";
import type { IExponentialVestingPlotProps } from "@site/src/components/types";

export const exponentialImmediateUnlockConfig = {
  functionType: 2,
  cliff: 0,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 2500,
  growthRate: 200,
};

const ExponentialImmediateUnlockPlot = ({ config }: IExponentialVestingPlotProps) => {
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlockPercentage = config.afterCliffBasisPoints / 100;
  const growthRate = config.growthRate / 100;
  const vestingFunction = `${immediateUnlockPercentage} + (x / ${durationDays})^${growthRate} * (100 - ${immediateUnlockPercentage})`;

  return (
    <FunctionPlot
      options={{
        xAxisLabel: "Days",
        yAxisLabel: "% - Tokens",
        xDomainLimit: durationDays,
        yDomainLimit: 100,
        data: [{ fn: vestingFunction, color: "#65a3ff" }],
      }}
    />
  );
};

export default ExponentialImmediateUnlockPlot;
