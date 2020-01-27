import React from "react";

const InnerComp = props => {
  return (
    <div className ="InnerComponent" key={props.url}>
      <h1>{props.title}</h1>
      <h3>Date: {props.date}</h3>
      <p>Description: {props.description}</p>
      <img href = {props.img} alt ="" />
    </div>
  );
};
export default InnerComp;