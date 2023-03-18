import S from "./styles";
import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";
import _ from "lodash";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const Charts = () => {
  const [chartData, setChartData] = useState([]);

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => values.manufacturer);
    console.log("values", values);
  };

  useEffect(() => {
    const data = [
      {
        manufacturer: "Ford",
        model: "Ka",
        sales: 3,
      },
      {
        manufacturer: "Ford",
        model: "Fiesta",
        sales: 10,
      },
      {
        manufacturer: "Ford",
        model: "Focus",
        sales: 5,
      },
      {
        manufacturer: "Ford",
        model: "Mustang",
        sales: 1,
      },
      {
        manufacturer: "Honda",
        model: "Civic",
        sales: 10,
      },
      {
        manufacturer: "Honda",
        model: "Fit",
        sales: 50,
      },
      {
        manufacturer: "Toyota",
        model: "Corola",
        sales: 70,
      },
      {
        manufacturer: "Toyota",
        model: "Etios",
        sales: 20,
      },
      {
        manufacturer: "Volks",
        model: "Gol",
        sales: 100,
      },
    ];
  }, []);

  return (
    <div>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
  );
};
