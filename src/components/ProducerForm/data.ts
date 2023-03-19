import { FormEventHandler } from "react";

export interface IProducerForm {
  schema?: {};
  register?: any;
  onSubmit?: (data: any) => void;
  errors?: any;
  handleSubmit?: (data: any) => FormEventHandler<HTMLFormElement>;
  closeModal?: () => void | undefined;
  id?: number;
}

export interface IProducerFormLayout extends IProducerForm {}
