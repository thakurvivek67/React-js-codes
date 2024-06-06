import React from "react";
import './ListItem.css';

export const ListItem = (props) => {
  return (
    <div className="itemC">
      <h2 className="name">{props.name}</h2>
      <div className="price">{props.price}</div>
    </div>
  );
};
