import React from 'react'

const ContactForm = props => {
  return (
    <form>
      <div>
        name:
        <input value={props.name} onChange={props.onInputName}></input>
      </div>
      <div>
        number:
        <input value={props.number} onChange={props.onInputNumber}></input>
      </div>

      <div>
        <button onClick={props.onfFormSubmit}>add</button>
      </div>
    </form>
  )
}

export default ContactForm
