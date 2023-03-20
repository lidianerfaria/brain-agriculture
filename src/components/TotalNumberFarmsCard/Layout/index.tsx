import React, { useContext, useEffect, useState } from "react";
import S from "./styles";

import AppContext from "../../../context/AppContext";

export const TotalNumberFarmsCard = () => {
  const { allProducers } = useContext(AppContext);
  const [totalNumberFarms, setTotalNumberFarms] = useState(0);

  const countFarms = (): number => {
    const totalNumber = allProducers.length;
    return totalNumber;
  };

  useEffect(() => {
    const total = countFarms();
    setTotalNumberFarms(total);
  }, [allProducers]);

  return (
    <S.Card>
      <S.Title>Total de Fazendas</S.Title>
      <S.Value>{totalNumberFarms}</S.Value>
    </S.Card>
  );
};
