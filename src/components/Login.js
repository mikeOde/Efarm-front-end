import {
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import loginLogo from "./images/loginLogo.png";

function Login() {
  const headerStyle = { marginTop: 10, color:"#72B750" };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    maxWidth: 380,
  };
  const logoStyle = { maxHeight: "100px", marginTop: "-25px" };
  const brandStyle = { color: "#516C66"};
  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <img src={loginLogo} alt="logo" style={logoStyle}/>
        <h3 style={brandStyle}>Efarm</h3>
        <h2 style={headerStyle}>Sign in</h2>
      </Grid>
      <TextField
        sx={{ paddingBottom: "10px" }}
        label="Email"
        type="email"
        placeholder="Enter email address"
        variant="standard"
        color="success"
        size="small"
        fullWidth
        required
      />
      <TextField
        sx={{ paddingBottom: "15px" }}
        label="Password"
        type="password"
        placeholder="Enter password"
        variant="standard"
        color="success"
        size="small"
        fullWidth
        required
      />
      <Button
        color="success"
        sx={{ backgroundColor: "#72b750", margin: "10px 0px" }}
        variant="contained"
        fullWidth
      >
        Sign in
      </Button>
      
    </Paper>
  );
}


export default Login;
