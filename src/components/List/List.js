import React from "react";
import { ListItem } from "./ListItem";
import"./List.css";

const items = [
  { id: "0", name: "daal", price: "100" },
  { id: "1", name: "chawal", price: "50" },
  { id: "2", name: "rajma", price: "180" },
  { id: "3", name: "paneer", price: "250" },
];

export const List = () => {
  return (
    <div className="viv">
      {items.map((item) => {
        return <ListItem key={item.id} name={item.name} price={item.price} />;
      })}
    </div>
  );
};
