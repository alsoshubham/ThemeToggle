import { useContext, useState } from "react"
import UserContext from "../context/UseContext"


function Login() {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')


    const {SetUser} =useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        SetUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e)=> SetUsername(e.target.value)} type="text" placeholder="username"/>
        <input value={password} onChange={(e)=> SetPassword(e.target.value)}  type="text" placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login