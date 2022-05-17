import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import {  auth, provider } from './firebase'
import {signInWithPopup} from 'firebase/auth'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const[{}, dispatch] = useStateValue();


    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
           dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((err) => alert(err.message));
    }

  return (
    <div className='login'>
       <div className="login__container">
           <img src="https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg" alt="" />
           <div className="login__text">
               <h1>Sign in to Whatsapp</h1>
           </div>

           <Button type="submit" onClick={signIn}>
               Sign In With Google
           </Button>
       </div>
    </div>
  )
}

export default Login