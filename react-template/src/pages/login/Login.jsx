import { useState } from "react"
import "./login.scss"
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase-config";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
  })
  
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login