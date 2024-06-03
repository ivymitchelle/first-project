import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton =  () => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogOut = () => {
        logout({
            returnTo: window.location.origin,
        });
    
    }

    return(
        isAuthenticated && (
            <button onClick={handleLogOut}>
                Leave Sight
        </button>
        )
        
    )
}

export default LogoutButton