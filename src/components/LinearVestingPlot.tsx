import React from "react";
import FunctionPlot from "@site/src/components/FunctionPlot";

export const linearVestingConfig = {
  functionType: 0,
  cliff: 0,
  duration: 365 * 24 * 60 * 60,
  period: 1,
  afterCliffBasisPoints: 0,
};

const LinearVestingPlot = ({ config }) => (
  <FunctionPlot options={{
    xAxisLabel: "Days",
    yAxisLabel: "% - Tokens",
    xDomainLimit: config.duration / (24 * 60 * 60),
    yDomainLimit: 100,
    data: [{ fn: `x / ${config.duration / (24 * 60 * 60)} * 100`, color: "#65a3ff" }]
  }} />
);

export default LinearVestingPlot;
