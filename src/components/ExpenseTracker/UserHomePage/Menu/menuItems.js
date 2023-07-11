import { Link } from "react-router-dom";
import "./menuItems.css";
import { Button, Grid } from "@mui/material";
function MenuItems() {
  return (
    <>
      <Grid className="MenuItems">
        <Link id="links" to="/user/expenses">
          <Button
            id="menuItems"
            variant="contained"
            style={{
              border: "2px solid white",
              backgroundColor: "black",
              color: "white",
              width: "300px",
            }}
          >
            Track Expenses
          </Button>
        </Link>
        <Link id="links" to="/user/budget">
          <Button
            id="menuItems"
            variant="contained"
            style={{
              border: "2px solid white",
              backgroundColor: "black",
              color: "white",
              width: "300px",
            }}
          >
            Enter Budget for Month
          </Button>
        </Link>
      </Grid>
    </>
  );
}

export default MenuItems;
