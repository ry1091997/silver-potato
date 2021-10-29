import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Create from "./Components/Create";
import Header from "./Components/Header";
import Add from "./Components/Add";

toast.configure();

function App() {
  const [userData, setUserData] = useState([]);
  let [check, setCheck] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users/").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setUserData(resp.data);
      });
    });
  }, []);

  function upDate(id) {
    return userData[id];
  }

  const notification = (rah) => toast(rah);

  function dataUpdate(ob, id) {
    setUserData((prevItem) => {
      return prevItem.map((item, index) => {
        if (index !== id) {
          return item;
        } else {
          item.first_name = ob.first_name;
          item.last_name = ob.last_name;
          item.email = ob.email;
          return item;
        }
      });
      // return { ...prevItem, ob };
    });
  }
  function deleteUser(indexId) {
    setUserData((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== indexId;
      });
    });
  }

  function addNewUser(user) {
    setUserData((prevItem) => {
      return [...prevItem, user];
    });
  }

  function condToggle() {
    check = check === false ? true : false;
    setCheck(check);
  }

  return (
    <div>
      <Header condToggle={condToggle} />
      {check ? <Add addUser={addNewUser} notification={notification} /> : null}
      <div className="grid">
        {userData.map((item, id) => {
          return (
            <Create
              key={id}
              id={id}
              email={item.email}
              l_name={item.last_name}
              f_name={item.first_name}
              img={item.avatar}
              find={upDate}
              update={dataUpdate}
              deleteUser={deleteUser}
              notification={notification}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
