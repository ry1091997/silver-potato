import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function Add(props) {
  const [add, setAdd] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAdd((prevItem) => {
      return { ...add, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          name="first_name"
          value={add.first_name}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Second Name"
          name="last_name"
          value={add.last_name}
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          value={add.email}
        />
        <Fab
          size="small"
          className="addButton"
          disabled={!add.first_name || !add.last_name || !add.email}
          onClick={() => {
            props.addUser(add);
            props.notification("New User Added");
            setAdd({
              first_name: "",
              last_name: "",
              email: ""
            });
          }}
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default Add;
