import { Button } from "@mui/material";
import { useState } from "react";
import MenuItems from "./menuItems";
function Menu() {
  let [showMenu, setMenu] = useState(false);
  function displayMenu(e) {
    e.preventDefault();
    if (showMenu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  return (
    <>
      <Button
        variant="contained"
        style={{
          width: "90px",
          marginTop: "-26.5%",
          marginLeft: "2%",
          fontSize: "30px",
          backgroundColor: "black",
        }}
        onClick={displayMenu}
      >
        ☰
      </Button>
      {showMenu && <MenuItems />}
    </>
  );
}

export default Menu;
