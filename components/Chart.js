import React from "react";
import ReactEcharts from "echarts-for-react";

const Chart = ({ width, height, option, ...props }) => {
  return (
    <ReactEcharts
      style={{ width: width, height: height }}
      option={option}
      {...props}
    ></ReactEcharts>
  );
};

export default Chart;
