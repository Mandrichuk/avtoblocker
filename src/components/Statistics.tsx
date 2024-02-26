import React from "react";

import { statisticsText } from "../constants";
import { StatisticsProps } from "../lib/interfaces";

function Statistics({ lang }: StatisticsProps) {
  const statisticsTextData = statisticsText[lang] || statisticsText["en"];
  console.log(statisticsTextData);
  return (
    <section className="statisticsSection">
      <div className="wrapper">sdfsdf</div>
    </section>
  );
}

export default Statistics;
