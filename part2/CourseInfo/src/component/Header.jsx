import React from 'react'

const Header = props => {
  return (
    <>
      <h1>Web development curriculam</h1>
      <h2>{props.course.name}</h2>
    </>
  )
}

export default Header
