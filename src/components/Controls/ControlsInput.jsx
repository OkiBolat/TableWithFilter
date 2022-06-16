import React from "react";

const ControlsInput = ({ filteredItem, valueForFiltering, filterInputChange, moveFilter }) => {
  return (
    <div className="controlsInput">
      {filteredItem === 'amount' || filteredItem === 'distance' ?
        <input type='number' value={valueForFiltering} onChange={filterInputChange} /> :
        <input type='text' value={valueForFiltering} onChange={filterInputChange} />
      }
      <button onClick={() => moveFilter()}>Поиск</button>
    </div>
  )
};

export default ControlsInput;