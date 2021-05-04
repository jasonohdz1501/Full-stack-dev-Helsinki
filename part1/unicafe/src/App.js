import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const ButtonFeedBack = ({buttonProps}) => {
  return (
    <>
      {buttonProps.map((props, i) => (
        <Button key={i} text={props[0]} handleClick={props[1]} />
      ))}
    </>
  )
}

const Title = ({title}) => {
  return (<h1>{title}</h1>)
}

const Statistics = ({value}) =>{

 for (let i = 0; i < value.length; i++) {
   if(value[i] !== 0) {
    
    const total = () => {
      return value.reduce((acum, inc) => acum + inc)
    }
    const average = () => {
      return (value[0] - value[2] / total())
    }
    const positive = () => {
      return value[0] / total() * 100
    }

    return (  
    <div>

      <table>
        <tr>
          <td>good</td>
          <td>{value[0]}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{value[1]}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{value[2]}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{total()}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average()}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{positive()}%</td>
        </tr>
      </table>
    </div>  
    )
     
   } return (<p>No given feedback</p>)
  }
}
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
   return (
    <div>
      <Title title = 'give feedback' />
      <ButtonFeedBack buttonProps = {[
        ['good', () => setGood(good + 1)],
        ['neutral', () => setNeutral(neutral + 1)],
        ['bad', () => setBad(bad + 1)]
      ]}/>
      <Title title = 'statistics' />
      <Statistics value ={[good, neutral, bad]}/>
    </div>
  )
}

export default App