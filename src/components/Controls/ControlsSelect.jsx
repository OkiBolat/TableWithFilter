import React from "react";
import './Controls.scss'

const ControlsSelect = ({ options, option, onChangeFilter }) => <select className="selectmenu-element"value={option} onChange={onChangeFilter}>
  {options.map(option => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ))}
</select>

export default ControlsSelect;