import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

const generateSteppedData = (config) => {
  const { duration, period, afterCliffBasisPoints } = config;
  const totalDays = duration / (24 * 60 * 60);
  const stepSize = period / (24 * 60 * 60);
  const immediateRelease = afterCliffBasisPoints / 10000;
  const steps = Math.floor(totalDays / stepSize);
  const stepIncrement = (1 - immediateRelease) / steps;

  let data = [];
  for (let i = 0; i <= steps; i++) {
    const x = i * stepSize;
    const y = immediateRelease + i * stepIncrement;
    // Add horizontal line for the step
    data.push([x, y * 100]);
    if (i < steps) {
      const nextX = (i + 1) * stepSize;
      data.push([nextX, y * 100]);
    }
  }

  return data;
};

const StepVestingPlot = ({ config }) => {
  const data = generateSteppedData(config);
  return (
    <FunctionPlot 
      options={{
        xAxisLabel: "Days",
        yAxisLabel: "% - Tokens",
        xDomainLimit: config.duration / (24 * 60 * 60), // Convert seconds to days
        yDomainLimit: 100,
        data: [
          {
            points: data,
            fnType: 'points',
            graphType: 'polyline',
            color: '#65a3ff',
          },
        ],
      }}
    />
  );
};

export default StepVestingPlot;
