import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
    {text}
  </button>
  )
}


const TotalClicks = ({good, neutral, bad}) => good + neutral + bad

const TotalAverage = ({good, neutral, bad}) => (good * 1 + neutral * 0 + bad * -1)/(good + neutral + bad)

const Positive = ({good, neutral, bad}) => (good / (good + neutral + bad))*100

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
      <p>good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      all <TotalClicks neutral = {neutral} good = {good} bad = {bad}/><br></br>
      average <TotalAverage neutral = {neutral} good = {good} bad = {bad}/><br></br>
      positive <Positive neutral = {neutral} good = {good} bad = {bad}/> %
      </p>
    </div>
  )
}

export default App