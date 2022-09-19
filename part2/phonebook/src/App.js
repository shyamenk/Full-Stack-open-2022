import {useState} from 'react'
import Filter from './components/Filter.jsx'
import ContactForm from './components/ContactForm.jsx'
import ContactList from './components/ContactList.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4},
  ])

  const [name, setname] = useState('')
  const [number, setNumber] = useState('')
  const [search, setsearch] = useState([])

  const submitHandler = e => {
    e.preventDefault()
    if (persons.some(e => e.name === name)) {
      alert(`${name} is already added to phonebook`)
      setname('')
      setNumber('')
    } else {
      setPersons(persons.concat({name: name, number: number}))
      setname('')
      setNumber('')
    }
  }

  const inputNameHandler = e => {
    setname(e.target.value)
  }

  const inputNumberHandler = e => {
    setNumber(e.target.value)
  }

  const filterHandler = e => {
    const searchTerm = e.target.value

    //const searchItem = persons.filter(item => item.name === searchTerm)
    const filtered = persons.filter(entry =>
      Object.values(entry).some(
        val => typeof val === 'string' && val.includes(searchTerm),
      ),
    )
    setsearch(filtered)
  }

  return (
    <>
      <h2>PhoneBook</h2>
      <Filter filterHandler={filterHandler} />
      <h2>add a new</h2>
      <ContactForm
        onInputNumber={inputNumberHandler}
        onInputName={inputNameHandler}
        onfFormSubmit={submitHandler}
        name={name}
        number={number}
      />
      <h2>Numbers</h2>
      <ContactList persons={search} />
    </>
  )
}

export default App
