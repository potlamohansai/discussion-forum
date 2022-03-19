import React from 'react'
import "./Login.css";
import {signInWithPopup} from 'firebase/auth';
import { auth, provider } from '../../firebase';


function Login() {

    const handleSubmit = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='login-container'>
        <div className='login-content'>
            <img src= 'https://cdn.vox-cdn.com/thumbor/DyzKJpwYo6X0AlnalkJemtDvVTs=/0x0:2182x1455/1400x933/filters:focal(917x554:1265x902):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62619674/quora.0.jpg' alt='logo' />
            <button onClick = {handleSubmit} className='btn-login'>Login to Continue</button>
        </div>
    </div>
  )
}

export default Login