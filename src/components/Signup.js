import {
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import loginLogo from "./images/loginLogo.png";

function Signup() {
  const headerStyle = { marginTop: 10,  color:"#72B750" };
  const paperStyle = {
    padding: 20,
    maxWidth: 380,
  };
  const logoStyle = { maxHeight: "100px", marginTop: "-25px" };
  const brandStyle = { color: "#516C66" };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Grid align="center">
        <img src={loginLogo} alt="logo" style={logoStyle} />
        <h3 style={brandStyle}>Efarm</h3>
        <h2 style={headerStyle}>Sign Up</h2>
      </Grid>
      <form>
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <FormControl component="fieldset">
          <FormLabel
            color="success"
            component="legend"
            style={{ margin: "0px" }}
          >
            Register as:
          </FormLabel>
          <RadioGroup
            style={{ display: "initial" }}
            aria-label="user type"
            defaultValue="Customer"
            name="user-type"
          >
            <FormControlLabel
              value="customer"
              control={<Radio color="success" size="small" />}
              label="Customer"
            />
            <FormControlLabel
              value="farmer"
              control={<Radio color="success" size="small" />}
              label="Farmer"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Email"
          type="email"
          placeholder="Enter your email"
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Password"
          type="password"
          placeholder="Create a password"
          variant="standard"
          color="success"
          size="small"
          fullWidth
          required
        />
        <TextField
          sx={{ paddingBottom: "10px" }}
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
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
          Sign Up
        </Button>
      </form>
    </Paper>
  );
}

export default Signup;
