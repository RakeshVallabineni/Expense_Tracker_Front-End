import { Button } from "@mui/material";
import axios from "axios";
import AddExpenses from "../AddExpenses/addExpenses";
import UserContext from "../../../global/loginToken";
import { useState } from "react";
import Menu from "./Menu/menu";
function UserHomePage() {
  const username = localStorage.getItem("username");
  const LoginToken = localStorage.getItem("Token");

  const [status, setStatus] = useState(false);

  const [budgetData, setBudgetData] = useState(0);

  const [budgetColor, setBudgetColor] = useState("positive");

  async function ShowBudget() {
    const date = new Date();
    let currentBudgetMonth = {
      currentMonth: date.getMonth() + 1,
    };
    let showUserBudget = await axios.post(
      "http://localhost:5000/user/home/budget",
      currentBudgetMonth,
      { headers: { Authorization: LoginToken } }
    );

    setBudgetData(showUserBudget.data.remainingBudget);
    setBudgetColor(showUserBudget.data.status);
  }
  ShowBudget();

  function showExpenses(e) {
    e.preventDefault();
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }
  return (
    <div className="Expense-Tracker" style={{ marginTop: "-6.5%"}}>
      <UserContext.Provider value={LoginToken}>
        <Button
          variant="contained"
          style={{
            width: "200px",
            margin: "2%",
            marginTop: "9%",
            marginLeft: "85%",
            position: "relative",
            backgroundColor: budgetColor === "positive" ? "green" : "maroon",
          }}
        >
          {budgetData}
        </Button>
        <div style={{ marginTop: "-11%", marginLeft:"-3%" }}>
          <h1
            style={{
              width: "100%",
              left: "300px",
              marginLeft: "46%",
              marginTop: "7%",
              fontSize: "30px",
            }}
          >
            {username}
          </h1>
          <img
            style={{ width: "20%", marginTop: "-10%", marginLeft: "26%" }}
            src="https://st2.depositphotos.com/1588037/7901/v/950/depositphotos_79015500-stock-illustration-panda-say-hii.jpg"
            alt="Hello"
          ></img>
          <Button
            variant="contained"
            style={{
              width: "200px",
              margin: "47%",
              marginTop: "-10%",
              marginBottom: "0%",
              backgroundColor: "black",
            }}
            onClick={showExpenses}
          >
            Add Expense
          </Button>
          {status && <AddExpenses showBudgetExpenses={ShowBudget}/>}
        </div>
      </UserContext.Provider>
      <Menu />
    </div>
  );
}

export default UserHomePage;
