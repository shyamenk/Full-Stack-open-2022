import React from 'react'

const Total = ({course}) => {
  const exercises = course.parts.map(x => x.exercises)
  const exercisesCount = exercises.reduce((a, b) => a + b, 0)

  return <p>Total Exercises : {exercisesCount} </p>
}

export default Total
