import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, bad, neutral}) => {
  console.log(good, bad)
  const all = good + neutral + bad

  const positive = (good / all) * 100

  const average = (good - bad) / all
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
