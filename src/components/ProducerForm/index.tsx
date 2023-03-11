import { IProducerForm } from "./data";
import { Form as Layout } from "./Layout";
import { useState } from "react";
import * as yup from "yup";

export const Form = ({ ...props }: IProducerForm) => {
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const [producerName, setProducerName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [arableArea, setArableArea] = useState("");
  const [vegetationArea, setVegetationArea] = useState("");
  const [input, setInput] = useState({
    cpfOrCnpj,
    producerName,
    farmName,
    city,
    state,
    totalArea,
    arableArea,
    vegetationArea,
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setInput((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const initialValues = {
    cpfOrCnpj: "",
    producerName: "",
    farmName: "",
    city: "",
    state: "",
    totalArea: "",
    arableArea: "",
    vegetationArea: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    producerName: yup.string().required(),
    farmName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    totalArea: yup.string().required(),
    arableArea: yup.string().required(),
    vegetationArea: yup.string().required(),
  });

  const layoutProps = {
    ...props,
    validationSchema,
    initialValues,
    handleInputChange,
    cpfOrCnpj,
  };

  return <Layout {...layoutProps} />;
};
