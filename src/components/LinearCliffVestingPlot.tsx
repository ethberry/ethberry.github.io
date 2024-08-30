import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const linearCliffVestingConfig = {
  functionType: 0,
  cliff: 91.25 * 24 * 60 * 60,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 0,
};

const LinearCliffVestingPlot = ({ config }) => {
  const cliffDays = config.cliff / (24 * 60 * 60);
  const durationDays = config.duration / (24 * 60 * 60);
  const vestingFunction = `(x - ${cliffDays}) / (${durationDays} - ${cliffDays}) * 100`;

  return (
    <FunctionPlot
      options={{
        xAxisLabel: "Days",
        yAxisLabel: "% - Tokens",
        xDomainLimit: durationDays,
        yDomainLimit: 100,
        data: [
          { fn: "0", range: [0, cliffDays], color: "#f77423" },
          { fn: vestingFunction, range: [cliffDays, durationDays], color: "#f77423" },
        ],
      }}
    />
  );
};

export default LinearCliffVestingPlot;
