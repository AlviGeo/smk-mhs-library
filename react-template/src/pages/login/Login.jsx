import { useContext, useState } from "react"
import "./login.scss"
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      dispatch({type: "LOGIN", payload:user})
      navigate("/")
      Swal.fire(
        '',
        'Login Success!',
        'success'
      )
    }).catch((err) => {setError(true)});
  }
  
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        {error && <span>Wrong email or password!</span>}
        <input type="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=> setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login