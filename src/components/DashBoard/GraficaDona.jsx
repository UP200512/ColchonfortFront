import React from "react";
import "./GraficaStyles.css";

const GraficaDona = ({ data }) => {
  const renderPorciones = data.map((item, index) => (
    <div key={`porcion${index}`} className="recorte">
      <div className={`quesito ${item.os}`} data-rel={item.percentage}></div>
    </div>
  ));

  const renderOSPercentages = data.map((item, index) => (
    <li key={`os${index}`}>
      <p className={`os ${item.os} scnd-font-color`}>{item.os}</p>
      <p className="os-percentage">
        {item.percentage}
        <sup>%</sup>
      </p>
    </li>
  ));

  return (
    <>
      <div className="donut-chart-block block">
        <h2 className="titular">OS AUDIENCE STATS</h2>
        <div className="donut-chart">{renderPorciones}</div>
        <ul className="os-percentages horizontal-list">{renderOSPercentages}</ul>
      </div>
    </>
  );
};

export default GraficaDona;
