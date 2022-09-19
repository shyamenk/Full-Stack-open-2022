import React from 'react'

const Filter = props => {
  return (
    <div>
      filter shown with:
      <input type="text" onChange={props.filterHandler}></input>
    </div>
  )
}

export default Filter
