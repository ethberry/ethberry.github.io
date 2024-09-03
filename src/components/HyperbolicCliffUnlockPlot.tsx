import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const hyperbolicCliffUnlockConfig = {
  functionType: 1,
  cliff: 182.5 * 24 * 60 * 60, // Half a year cliff
  duration: 365 * 24 * 60 * 60,
  period: 1, // Release every second
  afterCliffBasisPoints: 2500, // Immediate release of 25% after cliff
};

const HyperbolicCliffUnlockPlot = ({ config }) => {
  const cliffDays = config.cliff / (24 * 60 * 60);
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlockPercentage = config.afterCliffBasisPoints / 100;
  const vestingFunction = `${immediateUnlockPercentage} + ((x - ${cliffDays}) / (${durationDays} - ${cliffDays})) / ((x - ${cliffDays}) / (${durationDays} - ${cliffDays}) + 1) * (100 - ${immediateUnlockPercentage}) * 2`;

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
		      {
		        points: [
		          [cliffDays, 0],
		          [cliffDays, immediateUnlockPercentage],
		        ],
		        fnType: "points",
		        graphType: "polyline",
		        color: "#65a3ff",
		      },
        ],
      }}
    />
  );
};

export default HyperbolicCliffUnlockPlot;
