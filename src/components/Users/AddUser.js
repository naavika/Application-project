import React, {useState, Fragment} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const [error, setError] = useState("");

   

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 

  const errorHandler = () => {
    setError(null);   
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age(non-empty values).",
      });
      
      return;
  }

  if (+enteredAge <= 0) {
    setError({
      title: "Invalid Input",
      message: "Please enter a valid age(>0).",        
    });
      return;
  }

  props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };
  

  return (
    <Fragment>
       {error && <ErrorModal title ={error.title} message ={error.message} onConfirm={errorHandler}/>}
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
    </Fragment>
  );
};

export default AddUser;

