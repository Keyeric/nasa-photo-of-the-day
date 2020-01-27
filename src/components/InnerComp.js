import React from "react";

const InnerComp = props => {
  return (
    <div key={props.url}>
      <p>Title: {props.title}</p>
      <p>Date: {props.date}</p>
      <p>Description: {props.description}</p>
      <img href = {props.img} />
    </div>
  );
};
export default InnerComp;