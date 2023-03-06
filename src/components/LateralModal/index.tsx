import { ILateralModal } from "./data";
import { LateralModal as Layout } from "./Layout";

export const LateralModal = ({ ...props }: ILateralModal) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
