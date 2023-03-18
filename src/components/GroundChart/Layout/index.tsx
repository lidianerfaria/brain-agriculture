import { Chart } from "react-google-charts";
import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import AppContext from "../../../context/AppContext";

export const GroundChart = () => {
  const [chartData, setChartData] = useState([]);
  const { allProducers } = useContext(AppContext);

  const handleChartData = (
    producers: { arableArea: number; vegetationArea: number }[]
  ) => {
    const arableAreaSum = _.sumBy(producers, "arableArea"); //Calculando a soma das propriedades arableArea de todos os objetos do array producers
    const vegetationAreaSum = _.sumBy(producers, "vegetationArea"); //Calculando a soma das propriedades vegetationArea de todos os objetos do array producers

    return [
      ["Área", "Porcentagem"],
      ["Área Agricultável", arableAreaSum],
      ["Área de Vegetação", vegetationAreaSum],
    ];
  };

  useEffect(() => {
    return setChartData(handleChartData(allProducers));
  }, [allProducers]);

  const options = {
    title: "Uso de solo (Área agricultável e Vegetação)",
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={chartData}
        width={"100%"}
        height={"400px"}
        options={options}
      />
    </div>
  );
};
