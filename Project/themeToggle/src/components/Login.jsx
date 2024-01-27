import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)       // setUser is calling from UserContext.

    const handleClick = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div>
            <input type="text" placeholder="username" className=""
                value={username}        // it will take value of username var and after any change it will pass value to setUsername which will update
                onChange={(e) => setUsername(e.target.value)}/>   

            <input type="text" placeholder="password" className="ml-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login;


/* for placeholder we need state which will update value so for that we've to use useState.
    and since we used useSatte so that we need to pass this value to input tag
*/