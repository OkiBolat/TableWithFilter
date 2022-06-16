import React from "react";

const ControlsSelect = ({ options, option, onChangeFilter }) => <select value={option} onChange={onChangeFilter}>
  {options.map(option => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ))}
</select>

export default ControlsSelect;