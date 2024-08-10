import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className = "backdrop" onClick = {props.onConfirm}></div>
      <Card className = "modal">
        <header className = "header">
          <h2>{props.title}</h2>
          <div className = "content">
            <p>{props.message}</p>
          </div>
          <footer className = "actions">
            <Button onClick ={props.onConfirm}>Okay</Button>
          </footer>
        </header>
      </Card>
    </div>
  );
};

export default ErrorModal;
