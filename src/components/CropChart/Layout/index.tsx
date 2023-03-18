import { Chart } from "react-google-charts";
import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import AppContext from "../../../context/AppContext";

export const CropChart = () => {
  const [chartData, setChartData] = useState([]);
  const { allProducers } = useContext(AppContext);

  const handleChartData = (data: { customCheckbox: string[] }[]) => {
    const customCheckboxes = _.flatMap(
      data,
      (producer) => producer.customCheckbox
    ); //Acessando todas as culturas dos produtores
    const counts = _.countBy(customCheckboxes); //Contando a quantidade de ocorrências de cada cultura
    const pairs: [string, number][] = Object.entries(counts); //Criando um array de pares [chave, valor]
    const result = pairs.map(([key, value]) => [key, value]); //Mapeando cada par para um novo array

    return [["Cultura", "Número de produtores"], ...result];
  };

  useEffect(() => {
    return setChartData(handleChartData(allProducers));
  }, [allProducers]);

  const options = {
    title: "Distribuição de Produtores por cultura",
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
