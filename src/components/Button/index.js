import React from "react"
import styles from "./Button.module.css"

export const Button = ({ name, color, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick} style={{ backgroundColor: color }}>
        {name}
      </button>
    </div>
  )
}
