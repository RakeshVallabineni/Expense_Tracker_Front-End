import "./homePage.css";
import BrandIntroduction from "../Introductory/brandIntroduction";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function HomePage() {
  return (
    <div className="HomeUi">
      <img
        id="Hello_Image"
        src="https://cdn-icons-png.flaticon.com/128/5619/5619906.png"
        alt="Hello"
      ></img>
      <h1>Welcome to Expense Tracker</h1>
      <BrandIntroduction />
      <Link
        to="signup"
        id="button"
        style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Signup
        </Button>
      </Link>
      <Link
        to="login"
        id="button"
        style={{ textDecoration: "none", color: "black", fontSize: "15px" }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
        >
          login
        </Button>
      </Link>
    </div>
  );
}

export default HomePage;
