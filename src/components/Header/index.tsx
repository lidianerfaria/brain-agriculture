import { IHeader } from "./data";
import { Header as Layout } from "./Layout";
import { useState } from "react";

export const Header = ({ ...props }: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);

  function handleCloseModal() {
    setOpen(false);
  }

  const layoutProps = {
    ...props,
    open,
    setOpen,
    handleCloseModal,
  };

  return <Layout {...layoutProps} />;
};
