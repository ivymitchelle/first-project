import { useAuth0 } from '@auth0/auth0-react';
import "./login.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }

  return (

    <div className='login'>
        <div className='login-container'>

            <h1 className='welcome'>Welcome </h1><br/>

            <h1 className='to'>to</h1>

            <h1 className='login-title'>Idea Vault</h1>
            <button onClick={handleLogin} className='button'>
            See Inside
            </button>
        </div>
    </div>

  )
}

export default LoginButton;