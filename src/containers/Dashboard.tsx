import {
  StateChart,
  TotalHectaresFarmsCard,
  TotalNumberFarmsCard,
} from "../components";
import S from "./styles";

export const Dashboard = () => {
  return (
    <S.Container>
      <S.CardWrap>
        <TotalNumberFarmsCard />
        <TotalHectaresFarmsCard />
      </S.CardWrap>
      <StateChart />
    </S.Container>
  );
};
