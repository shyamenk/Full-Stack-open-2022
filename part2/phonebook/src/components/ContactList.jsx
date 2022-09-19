import React from 'react'

const ContactList = props => {
  return (
    <div>
      {props.persons.map((per, index) => (
        <div key={per.id}>
          {per.name} {per.number}
        </div>
      ))}
    </div>
  )
}

export default ContactList
