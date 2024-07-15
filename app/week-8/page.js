// Import the useUserAuth hook
'use client'
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page()
{
    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    function handleSignIn(){
        gitHubSignIn();
    }

    function handleSignOut(){
        firebaseSignOut();
    }
    return(
        <div>
            <h1>
                Week-8 
            </h1>
            {!user && <button onClick={handleSignIn}>Sign in with github</button>}
            {user &&(
                <div>
                    <p>
                        you are sign in as <strong>{user.displayName}</strong>
                    </p>
                    <p>
                          Welcome, {user.displayName} ({user.email})
                    </p>;
                    <button onClick={handleSignOut}> Sign out 
                    </button>
                    </div>
                    
            )}
        </div>
        
    )
}
   
