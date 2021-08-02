import React, {useState} from 'react'
import './login.css'
import {auth, provider } from './firebase';











const Login = () => {

    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userdetails, setUserdetails] = useState([]);

function handleSubmit(e) {
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then(result => {
       const user = result.user;
      const { displayName, photoURL} = user;
      setUserdetails({displayName, photoURL});
      
    })
    .catch((error) => alert(error.message))
    
}
    
    return (
        <div className='login'>
           
            <div className='body'>

            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
            />
            <div className='box'>
                <form>

                <input value={email}
                onClick = {(e) => setEmail(e.target.value)}
                placeholder='Email adress or phone number'></input>

                

                <input 
                value={password}
                onClick = {(e) => setPassword( e.target.value)}
                placeholder='Password'></input>
                

                <button className='submit' type='submit' onClick={handleSubmit}>Log In</button>
               
                
                </form>
                <p>Forgottten Password</p>
                <button className='new_account'>Create New Account</button>
            </div>
            
            </div>
        </div>
    )
}

export default Login;
