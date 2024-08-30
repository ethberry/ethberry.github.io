import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const exponentialCliffUnlockConfig = {
  functionType: 2,
  cliff: 182.5 * 24 * 60 * 60,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 2500,
  growthRate: 200,
};

const ExponentialCliffUnlockPlot = ({ config }) => {
  const cliffDays = config.cliff / (24 * 60 * 60);
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlockPercentage = config.afterCliffBasisPoints / 100;
  const growthRate = config.growthRate / 100;
  const vestingFunction = `${immediateUnlockPercentage} + ((x - ${cliffDays}) / (${durationDays} - ${cliffDays}))^${growthRate} * (100 - ${immediateUnlockPercentage})`;

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
		      {
		        points: [
		          [cliffDays, 0],
		          [cliffDays, immediateUnlockPercentage],
		        ],
		        fnType: "points",
		        graphType: "polyline",
		        color: "#f77423",
		      },
        ],
      }}
    />
  );
};

export default ExponentialCliffUnlockPlot;
