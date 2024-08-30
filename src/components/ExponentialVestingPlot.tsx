import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const exponentialVestingConfig = {
  functionType: 2,
  cliff: 0,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 0,
  growthRate: 200,
};

const ExponentialVestingPlot = ({ config }) => {
  const durationDays = config.duration / (24 * 60 * 60);
  const growthRate = config.growthRate / 100;
  const vestingFunction = `(x / ${durationDays}) ^ ${growthRate} * 100`;

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

export default ExponentialVestingPlot;
