import {
  StateChart,
  TotalHectaresFarmsCard,
  TotalNumberFarmsCard,
} from "../components";
import { CropChart } from "../components/CropChart";
import { GroundChart } from "../components/GroundChart";
import S from "./styles";

export const Dashboard = () => {
  return (
    <S.Container>
      <S.CardWrap>
        <TotalNumberFarmsCard />
        <TotalHectaresFarmsCard />
      </S.CardWrap>
      <StateChart />
      <CropChart />
      <GroundChart />
    </S.Container>
  );
};
