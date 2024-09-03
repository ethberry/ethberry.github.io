import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const hyperbolicImmediateUnlockConfig = {
  functionType: 1,
  cliff: 0,
  duration: 365 * 24 * 60 * 60, // Total duration of 365 days
  period: 1, // Release every second
  afterCliffBasisPoints: 2500, // Immediate release of 25%
};

const HyperbolicImmediateUnlockPlot = ({ config }) => {
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlockPercentage = config.afterCliffBasisPoints / 100;
  const vestingFunction = `${immediateUnlockPercentage} + (x / ${durationDays}) / (x / ${durationDays} + 1) * (100 - ${immediateUnlockPercentage}) * 2`;

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

export default HyperbolicImmediateUnlockPlot;
