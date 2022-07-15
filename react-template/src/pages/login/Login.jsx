import { useContext, useState } from "react"
import "./login.scss"
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import logo from "../../components/images/mhs-logo.png";

// Material UI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src={logo} alt="MHS" style={{height: "120px", width: "350px", marginBottom: "5px"}} />
          <Typography component="h1" variant="h5">
            Sign in (Admin)
          </Typography>
          <br />
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          {error && <Alert severity="error">Wrong Email or Password</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e=> setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=> setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: "#B22D31"}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login