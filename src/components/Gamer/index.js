import React from "react"
import styles from "./Gamer.module.css"

export const Gamer = ({ name }) => {
  const imageSrc = `images/${name.toLowerCase()}.jpg`

  return (
    <div className={styles.avatar}>
      <img src={imageSrc} />
      <span>{name}</span>
    </div>
  )
}
