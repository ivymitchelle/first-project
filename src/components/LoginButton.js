import { useAuth0 } from '@auth0/auth0-react';

const LoginButton =  () => {
    const { loginWithRedirect} = useAuth0();
    const handleLogin=()=>{
        loginWithRedirect();
    }

    return(
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                See Inside
        </button>
        )
        
    )
}

export default LoginButton