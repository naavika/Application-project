import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {

  const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError('Both fields are required.');
      return;
  }

  if (+enteredAge <= 0) {
      setError('Age must be a positive number.');
      return;
  }

  setError('');

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

