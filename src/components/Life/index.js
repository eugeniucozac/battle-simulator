import React from "react"
import styles from "./Life.module.css"

export const Life = ({ health }) => {
  return (
    <div className={styles.life}>
      <div>
        <div className={styles.background} style={{ height: `${health}%` }}></div>
      </div>
      <p>{health}</p>
    </div>
  )
}
