import React from "react";

const ControlsInput = ({filteredItem, valueForFiltering, filterInputChange, moveFilter}) => {
  return (
    filteredItem === 'amount' || filteredItem === 'distance'?
       <input type='number' value={valueForFiltering} onChange={filterInputChange} /> :
       <input type='text' value={valueForFiltering} onChange={filterInputChange}/>
  )
};

export default ControlsInput;