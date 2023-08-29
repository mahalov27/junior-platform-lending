import React, { useState } from "react"
import styles from "./CustomInput.module.scss"
// import { HiddenIcon, InfoIcon, ShownIcon } from "../../assets/Icons"

interface InputProps {
  label: string
  type: string
  value: string | number | readonly string[] | undefined
  placeholder?: string | undefined
  disabled?: boolean | undefined
  requirement?: boolean
  name?: string
  className?: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const CustomInput = ({
  label,
  type,
  value,
  placeholder = undefined,
  disabled = false,
  requirement = false,
  name,
  className,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <label className={styles.title + " " + (requirement ? styles.error : "")}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          className={className}
        />
        {type === "password" ? (
          <div
            className={styles.iconWrapper}
            onClick={() => setShowPassword(!showPassword)}
          >
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CustomInput
