import axios, { AxiosResponse } from "axios";
import { useState, ChangeEvent } from "react";
import { validationEmail } from "../../../utils/validation";
import CustomInput from "../../CustomInput/CustomInput";
import Loader from "../../Loader/Loader";
import Alert from "../../Alert/Alert";
import styles from "./Form.module.scss";

type ResponseType = {
  response: {
    status: number
  }
}

const Form = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [mailError, setMailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<number | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "name") {
      if(value.length <= 24){
        setUserName(value);
      }
      return
    } else {
      setUserEmail(value);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMailError(false);
    setNameError(false);
    if (!validationEmail(userEmail) || userName.length <= 2) {
      if (!validationEmail(userEmail)) {
        setMailError(true);
      }
      if (userName.length <= 2) {
        setNameError(true);
      }
      return;
    }

    setIsLoading(true);
    try {
      const response: AxiosResponse <ResponseType> = await axios.post(
        "http://ec2-13-53-37-131.eu-north-1.compute.amazonaws.com/mailing_list_subscription/",
        {
          email: userName,
          name: userEmail,
        }
        );
        
          setQuery(response.status)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setQuery(error?.response?.status)
    }
    setIsLoading(false);
    setUserName("");
    setUserEmail("");
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
          <form>
            <CustomInput
              label={
                !nameError ? "" : "Ім`я має містити більше двох знаків"
              }
              value={userName}
              type={"text"}
              onChange={handleChange}
              placeholder={"Ім`я"}
              name={"name"}
              requirement={nameError}
              className={styles.input}
            />
            <CustomInput
              label={!mailError ? "" : "Некоректний e-mail"}
              value={userEmail}
              type={"text"}
              onChange={handleChange}
              placeholder={"E-mail"}
              name={"email"}
              requirement={mailError}
              className={styles.input}
            />
            <button
              className={styles.btn}
              onClick={handleSubmit}
              disabled={userName.length === 0 || userEmail.length === 0 ? true : false}
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
