import { IProducerForm } from "./data";
import { Form as Layout } from "./Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { getOneProducer } from "../.././services/api";

const cpfCnpjRegex =
  /^((\d{3}\.?\d{3}\.?\d{3}\-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}))$/;

const schema = Yup.object().shape({
  cpfOrCnpj: Yup.string()
    .required("Campo obrigatório.")
    .matches(cpfCnpjRegex, "CPF ou CNPJ inválido."),
  producerName: Yup.string().required("Campo obrigatório."),
  farmName: Yup.string().required("Campo obrigatório."),
  city: Yup.string().required("Campo obrigatório."),
  state: Yup.string().required("Campo obrigatório."),
  arableArea: Yup.number()
    .required("Campo obrigatório.")
    .typeError("Campo obrigatório.")
    .positive("A área deve ser um número positivo."),
  vegetationArea: Yup.number()
    .required("Campo obrigatório.")
    .typeError("Campo obrigatório.")
    .positive("A área deve ser um número positivo."),
  totalArea: Yup.number()
    .required("Campo obrigatório.")
    .typeError("Campo obrigatório.")
    .test(
      "sum-equals-total",
      "A soma de Área Agricultável e Vegetação não deve ser maior que a Área Total da Fazenda.",
      function (value) {
        const { arableArea, vegetationArea } = this.parent;
        return arableArea + vegetationArea <= value;
      }
    ),
  customCheckbox: Yup.array()
    .typeError("Selecione suas culturas.")
    .min(1, "Por favor, selecione pelo menos uma cultura.")
    .of(Yup.string().required("Campo obrigatório."))
    .required("Campo obrigatório."),
});

type IFormFields =
  | "cpfOrCnpj"
  | "producerName"
  | "farmName"
  | "city"
  | "state"
  | "arableArea"
  | "vegetationArea"
  | "totalArea"
  | "customCheckbox";

export const Form = ({ ...props }: IProducerForm) => {
  const { handleNewForm, handleEditProducer } = useContext(AppContext);
  const [defaultValues, setDefaultValues] = useState({
    cpfOrCnpj: "",
    producerName: "",
    farmName: "",
    city: "",
    state: "",
    arableArea: "",
    vegetationArea: "",
    totalArea: "",
    customCheckbox: [],
  });

  useEffect(() => {
    if (props.id) {
      getOneProducer(props.id).then((response) => {
        setDefaultValues(response);
      });
    }
  }, []);

  useEffect(() => {
    const dafaultValuesKeys = Object.keys(defaultValues) as IFormFields[];
    dafaultValuesKeys.forEach((formKey: IFormFields) => {
      setValue(formKey, defaultValues[formKey]);
    });
  }, [defaultValues]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit = (producer: any) => {
    props.id ? handleEditProducer(props.id, producer) : handleNewForm(producer);
    props.closeModal && props.closeModal();
  };

  const layoutProps = {
    ...props,
    register,
    onSubmit,
    handleSubmit,
    errors,
    defaultValues,
  };

  return <Layout {...layoutProps} />;
};
