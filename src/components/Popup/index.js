import React from "react"
import styles from "./Popup.module.css"

export const Popup = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>
    </div>
  )
}
