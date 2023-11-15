import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Aunthentication from './components/Aunthenticate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SignUpForm/>
      </div>
      <div>
        <Aunthentication/>
      </div>
    </>
  )
}

export default App
