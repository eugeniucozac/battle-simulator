import React from "react"
import styles from "./Dice.module.css"

export const Dice = ({ number }) => {
  return <img className={styles.dice} src={`images/${number}.png`} />
}
