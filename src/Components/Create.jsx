import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";

function Create(props) {
  let [condCheck, setCondCheck] = useState(true);
  let [updateData, setUpdateData] = useState({
    first_name: props.f_name,
    last_name: props.l_name,
    email: props.email
  });

  function handleClick() {
    condCheck = condCheck === false ? true : false;
    setCondCheck(condCheck);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateData((prevVitem) => {
      return {
        ...updateData,
        [name]: value
      };
    });
  }

  //   {props.f_name}
  // {props.l_name}
  // {props.email
  // src={props.img}
  return (
    <div className="gridItem">
      <img className="createImg" src={props.img} alt="img" />
      {condCheck ? (
        <div>
          <p className="itemContent"> {props.f_name}</p>
          <p className="itemContent"> {props.l_name}</p>
          <p className="itemContent"> {props.email}</p>
          <Fab
            size="small"
            onClick={() => handleClick()}
            className="editButton"
          >
            <EditIcon />
          </Fab>
          <Fab
            size="small"
            className="deleteButton"
            onClick={() => {
              props.deleteUser(props.id);
              props.notification("Item Successfully deleted");
            }}
          >
            <DeleteIcon />
          </Fab>
        </div>
      ) : (
        <div>
          <input
            className="createInput"
            type="text"
            value={updateData.first_name}
            name="first_name"
            onChange={handleChange}
          />
          <input
            className="createInput"
            type="text"
            name="last_name"
            value={updateData.last_name}
            onChange={handleChange}
          />
          <input
            className="createInput"
            type="text"
            name="email"
            value={updateData.email}
            onChange={handleChange}
          />
          <Fab
            size="small"
            disabled={
              !updateData.first_name ||
              !updateData.last_name ||
              !updateData.email
            }
            onClick={() => {
              props.update(updateData, props.id);
              setUpdateData({
                first_name: "",
                last_name: "",
                email: ""
              });
              condCheck = condCheck === false ? true : false;
              setCondCheck(condCheck);
              props.notification("User Detail Updated!");
            }}
          >
            <CheckIcon />
          </Fab>
        </div>
      )}
    </div>
  );
}

export default Create;
