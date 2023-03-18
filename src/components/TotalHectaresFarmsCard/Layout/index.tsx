import { useContext, useEffect, useState } from "react";
import S from "./styles";

import AppContext from "../../../context/AppContext";

export const TotalHectaresFarmsCard = () => {
  const { allProducers } = useContext(AppContext);
  const [totalHectaresFarms, setTotalHectaresFarms] = useState(0);

  const sumTotalArea = (allProducers: { totalArea: number }[]): number => {
    return allProducers.reduce(
      (total, producer) => total + producer.totalArea,
      0
    );
  };

  useEffect(() => {
    const total = sumTotalArea(allProducers);
    setTotalHectaresFarms(total);
  }, [allProducers]);

  return (
    <S.Card>
      <S.Title>Total em Hectares</S.Title>
      <S.Value>{totalHectaresFarms}</S.Value>
    </S.Card>
  );
};
