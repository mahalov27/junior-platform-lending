import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import CustomInput from "../../CustomInput/CustomInput";
import Loader from "../../Loader/Loader";
import Alert from "../../Alert/Alert";
import styles from "./Form.module.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<number | null>(null);
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, t("form.input.validation.name.min")).max(24, t("form.input.validation.name.max")),
      email: Yup.string().email(t("form.input.validation.e_mail")).matches(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, t("form.input.validation.e_mail")),
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
        "api/v1/mailing_list_subscription/",
        {
          email: formik.values.email,
          name: formik.values.name,
        }
        );
          setQuery(response.status)
          
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setQuery(error?.response?.status)
    }

    formik.values.email = "";
    formik.values.name = "";

    setIsLoading(false);
    setTimeout(() => setQuery(null), 4000);
  };

  return (
    <div id="form" className={styles.container}>
      {query && <Alert code={query} setState={setQuery}/>}
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h5 className={styles.title}>{t("form.title")}</h5>
          <p className={styles.text}>
            {parse(t("form.description"))}
          </p>
        </div>
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label={ formik.errors.name}
              value={formik.values.name}
              type={"text"}
              onChange={formik.handleChange}
              placeholder={t("form.input.name")}
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
              {isLoading ? <Loader /> : t("form.btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
