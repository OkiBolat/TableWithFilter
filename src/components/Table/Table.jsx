import React from "react";
import TableItem from "../TableItem/TableItem";
import './Table.scss'

const Table = ({items}) => {
  return (
    <table className="table" color="red">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
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
