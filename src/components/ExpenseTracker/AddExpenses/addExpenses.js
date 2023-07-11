import { Grid, TextField } from "@mui/material";
import AddDateExpense from "./Helpers/date";
import { format } from "date-fns";
import { Button } from "@mui/material";
import "./addExpenses.css";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../../global/loginToken";

function AddExpenses({ showBudgetExpenses }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);

  const LoginToken = useContext(UserContext);

  function AddDate(AddedDate) {
    const date = new Date(AddedDate);
    const formattedDate = format(date, "yyyy-MM-dd");
    setCurrentMonth(date.getMonth() + 1);
    setDate(formattedDate);
  }
  let expenseDetails = {
    expenseName: expenseName,
    amount: amount,
    date: date,
    currentMonth: currentMonth,
  };
  async function saveExpenseDetails(e) {
    try {
      e.preventDefault();
      let saveUserResponse = await axios.post(
        "http://localhost:5000/user/home/saveExpense",
        expenseDetails,
        { headers: { Authorization: LoginToken } }
      );
      showBudgetExpenses();
      alert(saveUserResponse.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div id="expenses">
      <form className="addExpenses">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              className="TextField"
              id="expenseName"
              label="Expense Name"
              variant="filled"
              style={{ width: "400px" }}
              onChange={(e) => {
                setExpenseName(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={9}>
            <TextField
              className="TextField"
              id="amount"
              label="Amount"
              variant="filled"
              style={{ width: "400px" }}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            ></TextField>
          </Grid>
          <AddDateExpense AddDate={AddDate} />
          <Grid item xs={10}>
            <Button
              id="submitExpense"
              varaint="contained"
              style={{
                backgroundColor: "orange",
                color: "black",
                width: "250px",
                marginLeft: "70px",
              }}
              onClick={saveExpenseDetails}
            >
              Save Expense
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddExpenses;
