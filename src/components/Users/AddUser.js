import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {

  const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(enteredUsername, enteredAge);


    setEnteredUsername('');
    setEnteredAge('');
  };
  

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"
         value={enteredUsername}
         onChange={usernameChangeHandler}/> 
       </div>

       <div> 
        <label htmlFor="age">Age</label>
        <input id="age" type="number" 
         value={enteredAge}
         onChange={ageChangeHandler}/>
      </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

