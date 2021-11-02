import React,{useState,useEffect} from 'react'

import "./sign-in.style.scss"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import {signInWithGoogle} from "../../firebase/firebase.utils"

const SignIn = () => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (event) => {
    event.preventDefault()
   
    setEmail("")
    setPassword("")
}

const handleChange = async (event) => {
    if (event.target.name==="email"){
         setEmail(event.target.value)
    } else if(event.target.name==="password"){
        setPassword(event.target.value)
    }
    

}





// console.log(signInState)

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                name="email" 
                type="email" 
                value={email} 
                label="email"
                required
              handleChange={handleChange}    
                />
              
                <FormInput 
                name="password" 
                type="password" 
                value={password} 
                label="password"
                required
                handleChange={handleChange}      
                />
                <div className="buttons">
                <CustomButton type="submit" >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{" "}Sign In with Google{" "}</CustomButton>
                </div>
                
            </form>
          
        </div>
    )
}

export default SignIn
