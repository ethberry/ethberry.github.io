import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const hyperbolicCliffVestingConfig = {
  functionType: 1,
  cliff: 182.5 * 24 * 60 * 60, // Half a year cliff
  duration: 365 * 24 * 60 * 60,
  period: 1, // Release every second
  afterCliffBasisPoints: 0, // No immediate release
};

const HyperbolicCliffVestingPlot = ({ config }) => {
  const cliffDays = config.cliff / (24 * 60 * 60);
  const durationDays = config.duration / (24 * 60 * 60);
  const vestingFunction = `((x - ${cliffDays}) / (${durationDays} - ${cliffDays})) / ((x - ${cliffDays}) / (${durationDays} - ${cliffDays}) + 1) * 100 * 2`;

  return (
    <FunctionPlot
      options={{
        xAxisLabel: "Days",
        yAxisLabel: "% - Tokens",
        xDomainLimit: durationDays,
        yDomainLimit: 100,
        data: [
          { fn: "0", range: [0, cliffDays], color: "#65a3ff" },
          { fn: vestingFunction, range: [cliffDays, durationDays], color: "#65a3ff" },
        ],
      }}
    />
  );
};

export default HyperbolicCliffVestingPlot;
