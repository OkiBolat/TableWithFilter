import React from "react";
import TableItem from "../TableItem/TableItem";

const Table = ({items}) => {
  return (
    <table className="table" color="red">
    <thead>
      <tr>
        <td>Дата</td>
        <td>Название</td>
        <td>Количество</td>
        <td>Расстояние</td>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TableItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
  )
};

export default Table;
