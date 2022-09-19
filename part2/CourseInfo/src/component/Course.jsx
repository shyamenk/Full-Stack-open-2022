import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'
const Course = ({course, newCourse}) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Total course={course} />
      <Header course={course[1]} />
      <Content course={course[1]} />
      <Total course={course} />
    </div>
  )
}

export default Course
