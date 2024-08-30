import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const monthlyLinearConfig = {
  functionType: 0,
  cliff: 0,
  duration: 12 * 30 * 24 * 60 * 60, // 12 months duration
  period: 30 * 24 * 60 * 60, // 1 month period
  afterCliffBasisPoints: 0,
};

const MonthlyLinearPlot = ({ config }) => {
  const durationMonths = config.duration / (30 * 24 * 60 * 60);
  const periodMonths = config.period / (30 * 24 * 60 * 60);
  const steps = [];

  for (let i = 0; i <= durationMonths; i++) {
    steps.push({
      fn: `${(i * 100) / durationMonths} + ${100/durationMonths}`,
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

export default MonthlyLinearPlot;

