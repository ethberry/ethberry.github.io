import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const linearCliffUnlockConfig = {
  functionType: 0,
  cliff: 91.25 * 24 * 60 * 60,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 2500, // 25% immediate unlock after cliff
};

const LinearCliffUnlockPlot = ({ config }) => {
  const cliffDays = config.cliff / (24 * 60 * 60);
  const durationDays = config.duration / (24 * 60 * 60);
  const immediateUnlock = config.afterCliffBasisPoints / 10000 * 100;
  const vestingFunction = `${immediateUnlock} + (x - ${cliffDays}) / (${durationDays} - ${cliffDays}) * (100 - ${immediateUnlock})`;

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
		          [cliffDays, immediateUnlock],
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

export default LinearCliffUnlockPlot;
