import { format } from "date-fns";
import React from "react";
import './TableItem.scss'

const TableItem = ({ item }) => {
  const date = format(new Date(item.date), 'MM.dd.yyyy')

  return (
    <tr>
      <td>{date}</td>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{item.distance}</td>
    </tr>
  )
};

export default TableItem;
