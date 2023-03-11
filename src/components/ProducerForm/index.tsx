import { IProducerForm } from "./data";
import { Form as Layout } from "./Layout";
import { object } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const Form = ({ ...props }: IProducerForm) => {
  const schema = object({
    cpfOrCnpj: yup.string().required("Campo obrigatório."),
    name: yup.string().required("Campo obrigatório."),
    producerName: yup.string().required("Campo obrigatório."),
    farmName: yup.string().required("Campo obrigatório."),
    city: yup.string().required("Campo obrigatório."),
    state: yup.string().required("Campo obrigatório."),
    totalArea: yup.string().required("Campo obrigatório."),
    arableArea: yup.string().required("Campo obrigatório."),
    vegetationArea: yup.string().required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const layoutProps = {
    ...props,
    schema,
    register,
    onSubmit,
    errors,
    handleSubmit,
  };

  return <Layout {...layoutProps} />;
};
