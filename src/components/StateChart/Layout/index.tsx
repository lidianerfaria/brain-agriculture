import { Chart } from "react-google-charts";
import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import AppContext from "../../../context/AppContext";

export const StateChart = () => {
  const [chartData, setChartData] = useState<Array<Array<string | number>>>([]);
  const { allProducers } = useContext(AppContext);

  const handleChartData = (data: { state: string }[]) => {
    const states = _.groupBy(data, (value) => value.state); //Agrupando dados em função do parâmetro state do objeto
    const producersByState = _.mapValues(states, (group) => group.length); //Agrupando número de produtores por estado
    const pairs: [string, number][] = Object.entries(producersByState); //Criando um array de pares [chave, valor]
    const result = pairs.map(([key, value]) => [key, value]); //Mapeando cada par para um novo array

    return [["Estado", "Produtores por estado"], ...result];
  };

  useEffect(() => {
    return setChartData(handleChartData(allProducers));
  }, [allProducers]);

  const options = {
    title: "Distribuição de Produtores por Estado",
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
