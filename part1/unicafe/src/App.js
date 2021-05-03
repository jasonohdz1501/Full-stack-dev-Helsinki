import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
    {text}
  </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good +1)
  }
  const neutralFeedback = () => {
    setNeutral(neutral +1)
  }
  const badFeedback = () => {
    setBad(bad +1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick ={goodFeedback} text='good'/>
      <Button handleClick ={neutralFeedback} text='neutral'/>
      <Button handleClick ={badFeedback} text='bad'/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>good {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App