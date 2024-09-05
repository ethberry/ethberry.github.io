import React from 'react';
import TabSwitcher from './TabSwitcher';

const functionTypeNames = ["Linear", "Exponential", "Hyperbolic"];

const vestingFunctionName = (functionType) => {
  switch (functionType) {
    case 0: return 'Linear';
    case 1: return 'Exponential';
    case 2: return 'Hyperbolic';
    default: return 'Unknown';
  }
};

const formatDuration = (seconds) => {
  const days = seconds / (24 * 60 * 60);
  return `${days} days`;
};

const formatFieldName = (name) => {
  const mapping = {
    functionType: "Function Type",
    cliff: "Cliff (seconds)",
    duration: "Duration (days)",
    period: "Period (seconds)",
    afterCliffBasisPoints: "After Cliff Basis Points",
    growthRate: "Growth Rate"
  };
  return mapping[name] || name;
};

const formatFieldValue = (name, value) => {
  if (name === "cliff" || name === "duration") {
    return formatDuration(value);
  }
  if (name === "functionType") {
    return vestingFunctionName(value);
  }
  return value;
};

export const FormattedJSON = ({ config }) => (
  <pre>
    <code>{JSON.stringify(config, null, 2)}</code>
  </pre>
);

export const FormattedTable = ({ config }) => {
  const formattedConfig = {
    'Vesting Function': vestingFunctionName(config.functionType),
    'Cliff Duration': formatDuration(config.cliff),
    'Total Duration': formatDuration(config.duration),
    'Period': `${config.period} seconds`,
    'Cliff %': config.afterCliffBasisPoints / 100,
    'Growth Rate': config.growthRate || 'N/A',
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(formattedConfig).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(formattedConfig).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export const Config = ({ config }) => {
  const tabs = [
    {
      label: 'Config',
      content: <FormattedTable config={config} />,
    },
    {
      label: 'JSON',
      content: <FormattedJSON config={config} />,
    },
  ];

  return <TabSwitcher tabs={tabs} />;
};

export default Config;
