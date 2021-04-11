import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>The name of this course is <br></br>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  return (
  <div>
    <p>{props.parts[0].name} have {props.parts[0].excercises} excercises in total</p>
    <p>{props.parts[1].name} have {props.parts[1].excercises} excercises in total</p>
    <p>{props.parts[2].name} have {props.parts[2].excercises} excercises in total</p>
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>The total of the excercises are {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
    </div>

  )
}

const App = () => {;
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    excercises: 10
  },
  {
    name: 'Using props to pass data',
    excercises: 7
  },
  {
    name: 'State of a component',
    excercises: 14
  }
]
  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App;
