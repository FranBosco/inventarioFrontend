import {React, useContext, createContext, useState, useEffect} from "react"
import {auth} from "../Firebase/firebaseConfig"
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw Error("This not provider")
    return context
}
 

export function AuthProvider({children}) {
    const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)
    
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

    const logout = () => {
        signOut(auth);
        setUser({})
    }


    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (currentUser) => { //esto me devuelve el usuario logueado
            setUser(currentUser)
            setLoading(false)

        })
        return () => unsuscribed()
    }, [])
    return <authContext.Provider 
    
    value={{
         signup,
         login,
         user,
         logout,
         loading
        }}
    >
        {children}
        </authContext.Provider>
}