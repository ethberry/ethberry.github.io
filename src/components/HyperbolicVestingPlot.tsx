import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const hyperbolicVestingConfig = {
  functionType: 1,
  cliff: 0,
  duration: 365 * 24 * 60 * 60, // Total duration of 365 days
  period: 1, // Release every second
  afterCliffBasisPoints: 0, // No immediate release
};

const HyperbolicVestingPlot = ({ config }) => {
  const durationDays = config.duration / (24 * 60 * 60);
  const vestingFunction = `(x / ${durationDays}) / (x / ${durationDays} + 1) * 100 * 2`;

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

export default HyperbolicVestingPlot;
