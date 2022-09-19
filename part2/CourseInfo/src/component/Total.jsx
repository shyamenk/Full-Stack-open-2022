import React from 'react'

const Total = ({course}) => {
  const exercises = course.map(x => x.parts)

  const exercisesCount = exercises[0].reduce((a, b) => a + b.exercises, 0)

  return <p>{<b>total of Exercises: {exercisesCount}</b>}</p>
}

export default Total
