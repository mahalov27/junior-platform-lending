import { useEffect, useState } from 'react';
import styles from './Alert.module.scss';

type PropType = {
    code: number
    setState: React.Dispatch<React.SetStateAction<number | null>>
}

const Alert = ({code , setState}: PropType) => {
    const [message, setMessage] = useState<string | null>(null);

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
            {message === "ok" && <p className={styles.message}>Дякуємо за підписку, <br></br> ми Вас <span>повідомимо</span> про<br></br> запуск платформи</p>}
            {message === "repeat" && <p className={styles.message}>Вибачте, юзер з<br></br> такою поштою вже<br></br> <span>очікує</span> на лист</p>}
            {message === "error" && <p className={styles.message}>Вибачте, виникла<br></br> проблема. <span>Спробуйте</span><br></br> будь ласка пізніше</p>}
        </div>
    </div>
  )
}

export default Alert
