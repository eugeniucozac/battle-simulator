import React, { useState } from "react"
import { Button } from "../Button"
import { GamerContainer } from "../GamerContainer"
import { Gamer } from "../Gamer"
import { Life } from "../Life"
import { Dice } from "../Dice"
import { Popup } from "../Popup"
import styles from "./App.module.css"

const App = () => {
  const [dice, setDice] = useState({ firstGamerDice1: 1, firstGamerDice2: 4, secondGamerDice1: 4, secondGamerDice2: 1 })
  const [health, setHealth] = useState({ firstGamer: 100, secondGamer: 100 })

  const randomDice = () => Math.floor(Math.random() * (6 - 1) + 1)

  const rolleDices = () => {
    const firstGamerDice1 = randomDice()
    const firstGamerDice2 = randomDice()
    const secondGamerDice1 = randomDice()
    const secondGamerDice2 = randomDice()
    let hitResult = firstGamerDice1 + firstGamerDice2 - (secondGamerDice1 + secondGamerDice2)

    setDice({
      firstGamerDice1,
      firstGamerDice2,
      secondGamerDice1,
      secondGamerDice2,
    })

    if (hitResult < 0) {
      setHealth(prevState => ({
        ...prevState,
        firstGamer: Math.max(0, prevState.firstGamer - Math.abs(hitResult)),
      }))
    } else {
      setHealth(prevState => ({
        ...prevState,
        secondGamer: Math.max(0, prevState.secondGamer - Math.abs(hitResult)),
      }))
    }
  }

  const resetGame = () => {
    setDice({ firstGamerDice1: 1, firstGamerDice2: 4, secondGamerDice1: 4, secondGamerDice2: 1 })
    setHealth({ firstGamer: 100, secondGamer: 100 })
  }

  const { firstGamerDice1, firstGamerDice2, secondGamerDice1, secondGamerDice2 } = dice
  const { firstGamer, secondGamer } = health
  const hitResult = firstGamerDice1 + firstGamerDice2 - (secondGamerDice1 + secondGamerDice2)
  const hitPhrase = `hit for ${Math.abs(hitResult)}!`
  const lose = firstGamer <= 0
  const win = secondGamer <= 0

  return (
    <section className={styles.wrapper}>
      <h1>Battle Simulator</h1>
      <div className={styles.container}>
        <GamerContainer>
          <Gamer name="Player" />
          <Life health={firstGamer} />
          <section className={styles.dices}>
            <Dice number={firstGamerDice1} />
            <Dice number={firstGamerDice2} />
          </section>
        </GamerContainer>
        <h2>{!hitResult ? "No hits!" : hitResult > 0 ? `You ${hitPhrase}` : `Monster ${hitPhrase}`}</h2>
        <GamerContainer>
          <section className={styles.dices}>
            <Dice number={secondGamerDice1} />
            <Dice number={secondGamerDice2} />
          </section>
          <Life health={secondGamer} />
          <Gamer name="Monster" />
        </GamerContainer>
      </div>
      <Button name="Attack!" color="lightskyblue" onClick={rolleDices} />
      {(lose || win) && (
        <Popup>
          {lose && <h2 style={{ color: "red" }}>Game Over</h2>}
          {win && <h2 style={{ color: "green" }}>You Win</h2>}
          <Button name="Play Again!" color="red" onClick={resetGame} />
        </Popup>
      )}
    </section>
  )
}

export default App
