import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
    {text}
  </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0) {
    return (<p>No feedback given</p>)
  } return (
    <p>
      good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      all {good + neutral + bad}
      <br></br>
      average {(good * 1 + neutral * 0 + bad * -1)/(good + neutral + bad)}<br></br>
      positive {(good / (good + neutral + bad))*100} %
    </p> 
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App