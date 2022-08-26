import React from 'react'

const Part = props => {
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <p key={index}>
          {part.name}
          {part.exercises}
        </p>
      ))}
    </div>
  )
}

export default Part
