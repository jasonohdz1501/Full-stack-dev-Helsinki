import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
  <button  onClick = {handleClick}>
    {text}
  </button>
)}

const Anecdotes = ({textResult}) => {
  return <p>{textResult}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  console.log()
  const random = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0) + 0))
  }
 
  return (
    <div>
      <Anecdotes textResult={anecdotes[selected]}/>
      <Button text ='next anecdote' handleClick ={random}/>
    </div>
  )
}

export default App