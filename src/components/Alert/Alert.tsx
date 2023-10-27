import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import styles from './Alert.module.scss';

type PropType = {
    code: number
    setState: React.Dispatch<React.SetStateAction<number | null>>
}

const Alert = ({code , setState}: PropType) => {
    const [message, setMessage] = useState<string | null>(null);
    const { t } = useTranslation()

    useEffect(() => {
        if(code !== null){
            if(code >= 200 && code < 300){
                setMessage("ok")
            }else if(code === 400){
                setMessage("repeat")
            }else{
                setMessage("error")
            }
        }else{
            setMessage("error")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className={styles.modal} onClick={() => setState(null)}>
        <div className={styles.content} onClick={() => setState(null)}>
        <button className={styles.btn}></button>
            {message === "ok" && <p className={styles.message}>{parse(t("alert.ok"))}</p>}
            {message === "repeat" && <p className={styles.message}>{parse(t("alert.repeat"))}</p>}
            {message === "error" && <p className={styles.message}>{parse(t("alert.error"))}</p>}
        </div>
    </div>
  )
}

export default Alert
