import React from "react";
import './TableItem.scss'

const TableItem = ({ item }) => {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{item.distance}</td>
    </tr>
  )
};

export default TableItem;
