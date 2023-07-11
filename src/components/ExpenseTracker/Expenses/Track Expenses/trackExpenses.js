import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./trackExpenses.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function TrackExpenses() {
  const LoginToken = localStorage.getItem("Token");
  const expenses = useRef([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const saveUserResponse = await axios.get(
          "http://localhost:5000/user/home/expenses",
          { headers: { Authorization: LoginToken } }
        );
        expenses.current = saveUserResponse.data;
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    getExpenses();
  }, [LoginToken]);

  return (
    <table className="AllExpenses">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {isDataLoaded ? (
          expenses.current.data.map((e, key) => (
            <tr key={key}>
              <td>{e.expenseName}</td>
              <td>{e.amount}</td>
              <td>{e.date}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <Box sx={{width: "100%" }}>
                <LinearProgress />
              </Box>
            </td>
            <td>
              <Box sx={{width: "100%" }}>
                <LinearProgress />
              </Box>
            </td>
            <td>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TrackExpenses;
