import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./signup.css";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  let userDetails = {
    firstname: firstName,
    lastname: lastName,
    gmail: email,
    username: userName,
    password: password,
  };
  async function saveUserDetails(e) {
    try {
      if (password === rePassword) {
        e.preventDefault();
        let saveUserResponse = await axios.post(
          "http://localhost:5000/User/signup",
          userDetails
        );
        alert(saveUserResponse.data.message);
      } else {
        alert("Passwords should match!");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
      <form className="signupForm">
        <Grid container spacing={1} id="Grid">
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="firstname"
              label="Firstname"
              variant="filled"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="Lastname"
              label="Lastname"
              variant="filled"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="Username"
              label="Username"
              variant="filled"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="gmail"
              label="Gmail/Email"
              variant="filled"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="password"
              label="password"
              type="password"
              variant="filled"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ marginLeft: "10px", width: "70%" }}
              id="re-enterPassword"
              type="password"
              label="Re-enterpassword"
              variant="filled"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              id="signupSubmit"
              varaint="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                marginLeft: "60px",
                width: "50%",
              }}
              onClick={saveUserDetails}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Signup;
