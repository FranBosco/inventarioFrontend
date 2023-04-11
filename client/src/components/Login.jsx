import { useState } from "react"
import { useAuth } from "../context/Context"
import {useHistory} from "react-router-dom"

export function Login() {
    const {login} = useAuth()
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const [error, setError] = useState()
    const navigate = useHistory()

    const handleChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")
        try {
        await login(user.email, user.password)
        navigate.push("/home")
        } catch (error) {
           setError(error.message)
            }
        }
    
    return (
        <div> 
            {error && <p>{error}</p> }
            

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            name="email"
            placeholder="youremail@example.com" 
            onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={handleChange}
            />

            <button>Login</button>
        </form>
        </div>
    )
}