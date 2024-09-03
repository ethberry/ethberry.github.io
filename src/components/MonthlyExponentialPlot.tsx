import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const monthlyExponentialConfig = {
  functionType: 2,
  cliff: 0,
  duration: 12 * 30 * 24 * 60 * 60, // 12 months duration
  period: 30 * 24 * 60 * 60, // 1 month period
  afterCliffBasisPoints: 0,
  growthRate: 200, // Example growth rate
};

const MonthlyExponentialPlot = ({ config }) => {
  const durationMonths = config.duration / (30 * 24 * 60 * 60);
  const periodMonths = config.period / (30 * 24 * 60 * 60);
  const growthRate = config.growthRate / 100;
  const steps = [];

  for (let i = 0; i <= durationMonths; i++) {
    const yValue = Math.pow((i + 1) / durationMonths, growthRate) * 100;
    steps.push({
      fn: `${yValue}`,
      range: [i * periodMonths, (i + 1) * periodMonths],
    });
  }

  return (
    <FunctionPlot
      options={{
        xAxisLabel: "Months",
        yAxisLabel: "% - Tokens",
        xDomainLimit: durationMonths,
        yDomainLimit: 100,
        data: steps.map((step, index) => ({
          fn: step.fn,
          range: step.range,
          closed: "left",
          color: "#65a3ff",
        })),
      }}
    />
  );
};

export default MonthlyExponentialPlot;
