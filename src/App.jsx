import { useState } from 'react'

import Input from './components/Input'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
     <Input title={"Username"} type={"text"} placeholder={"enter username"} onChange={setUsername}/>
     <Input title={"Password"} type={"password"} placeholder={"Password"} onChange={setPassword}/>
     <p>Username:{username}</p>
     <p>Password:{password}</p>
    </>
  )
}

export default App
