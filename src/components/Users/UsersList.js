import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users-list">
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;