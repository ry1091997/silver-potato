import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function Header(props) {
  return (
    <div className="container">
      <h1>User List</h1>
      <h3>For adding New User press plus button</h3>
      <Fab size="small" className="addUser" onClick={() => props.condToggle()}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Header;
