import Content from './component/Content'
import Header from './component/Header'
import Total from './component/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }
  return (
    <div>
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    </div>
  )
}

export default App
