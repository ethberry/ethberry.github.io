import React, { useEffect, useRef } from "react";
import functionPlot, { FunctionPlotOptions } from "function-plot";

export interface ExtendedFunctionPlotOptions extends Omit<FunctionPlotOptions, "target"> {
  xAxisLabel?: string;
  yAxisLabel?: string;
  xDomainLimit?: number;
  yDomainLimit?: number;
}

export interface FunctionPlotProps {
  options?: ExtendedFunctionPlotOptions;
}

// See https://github.com/mauriciopoppe/function-plot
const FunctionPlot: React.FC<FunctionPlotProps> = React.memo(function ({ options }: FunctionPlotProps) {
  const rootEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootEl.current) {
      return;
    }
    try {
      functionPlot({
        ...options,
        disableZoom: true,
        grid: true,
        xAxis: {
          domain: [0, options?.xDomainLimit || 100],
          label: options?.xAxisLabel || "x - time",
        },
        yAxis: { domain: [0, options?.yDomainLimit || 100], label: options?.yAxisLabel || "y - % vested" },
        target: rootEl.current,
      });
    } catch (err) {
      console.error("FunctionPlot error: ", err);
    }
  }, [options, rootEl]);

  return <div ref={rootEl} />;
});

FunctionPlot.displayName = "FunctionPlot";

export default FunctionPlot;
