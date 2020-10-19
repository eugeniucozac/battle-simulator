import React from "react"
import styles from "./GamerContainer.module.css"

export const GamerContainer = ({ children }) => {
  return <div className={styles.gamer}>{children}</div>
}
