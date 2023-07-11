import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ checkStatus }) {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let loginCredentials = {
    gmail: gmail,
    password: password,
  };
  async function checkCredentials(e) {
    try {
      e.preventDefault();
      let checkCredentialsResponse = await axios.post(
        "http://localhost:5000/user/login",
        loginCredentials
      );
      if (checkCredentialsResponse.data.TOKEN) {
        localStorage.setItem("Token", checkCredentialsResponse.data.TOKEN);
        localStorage.setItem(
          "username",
          checkCredentialsResponse.data.UserName
        );
        localStorage.setItem("Status", true);
        checkStatus(true);
        alert(checkCredentialsResponse.data.message);
      }
      navigate("/user/home", { replace: true });
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div id="back">
      <form className="form">
        <Grid container spacing={1} id="Grid">
          <Grid item xs={12}>
            <TextField
              className="TextField"
              id="gmail"
              label="Email/Username"
              variant="filled"
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="TextField"
              id="password"
              label="Password"
              variant="filled"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              id="submit"
              varaint="contained"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "150px",
              }}
              onClick={checkCredentials}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
