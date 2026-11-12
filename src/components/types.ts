export interface IVestingConfig {
  functionType: number;
  cliff: number;
  duration: number;
  period: number;
  afterCliffBasisPoints: number;
  growthRate?: number;
}

export interface IVestingPlotProps {
  config: IVestingConfig;
}

export interface IExponentialVestingPlotProps {
  config: IVestingConfig & { growthRate: number };
}
