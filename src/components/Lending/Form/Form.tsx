import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../CustomInput/CustomInput";
import Loader from "../../Loader/Loader";
import Alert from "../../Alert/Alert";
import styles from "./Form.module.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<number | null>(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, "Ім`я має містити більше 2-x знаків").max(24, "Ім`я має містити не більше 24-х знаків"),
      email: Yup.string().email("Некоректний e-mail"),
    }),
    onSubmit: (_ , {resetForm}) =>{
      resetForm()
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if (formik.errors.name || formik.errors.email) {
      return;
    }

    setIsLoading(true);
    try {
      const response: AxiosResponse <ResponseType> = await axios.post(
        "http://ec2-13-53-37-131.eu-north-1.compute.amazonaws.com/mailing_list_subscription/",
        {
          email: formik.values.name,
          name: formik.values.email,
        }
        );
        
          setQuery(response.status)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setQuery(error?.response?.status)
    }
    setIsLoading(false);
    setTimeout(() => setQuery(null), 4000);
  };

  return (
    <div id="form" className={styles.container}>
      {query && <Alert code={query} setState={setQuery}/>}
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h5 className={styles.title}>Ми ще на етапі розробки...</h5>
          <p className={styles.text}>
            Залишай <span>свій e-mail</span> і ми надішлемо листа, коли
            платформа запрацює.
          </p>
        </div>
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label={ formik.errors.name}
              value={formik.values.name}
              type={"text"}
              onChange={formik.handleChange}
              placeholder={"Ім`я"}
              name={"name"}
              className={styles.input}
            />
            <CustomInput
              label={ formik.errors.email}
              value={formik.values.email}
              type={"text"}
              onChange={formik.handleChange}
              placeholder={"E-mail"}
              name={"email"}
              className={styles.input}
            />
            <button
              className={styles.btn}
              disabled={formik.values.name.length === 0 || formik.values.email.length === 0 ? true : false}
            >
              {isLoading ? <Loader /> : "Відправити"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
