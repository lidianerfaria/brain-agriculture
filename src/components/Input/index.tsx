import { IInputLayout } from "./data";
import { Input as Layout } from "./Layout";

export const Input = ({ ...props }: IInputLayout) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
