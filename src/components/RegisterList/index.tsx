import { IRegisterListLayout } from "./data";
import { RegisterList as Layout } from "./Layout";

export const RegisterList = ({ ...props }: IRegisterListLayout) => {
  return <Layout {...props} />;
};
