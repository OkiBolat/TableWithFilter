import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilteredOptions } from "../../redux/actionsCreatior";
import ControlsInput from "./ControlsInput";
import ControlsSelect from "./ControlsSelect";

const filteredItems = [
  { value: '', text: 'Выберите данные' },
  { value: 'name', text: 'Название' },
  { value: 'amount', text: 'Количество' },
  { value: 'distance', text: 'Расстояние' },
];
const filteredOptions = [
  { value: '', text: 'Выберите условие' },
  { value: 'more', text: 'Больше' },
  { value: 'less', text: 'Меньше' },
  { value: 'contains', text: 'Содержит' },
  { value: 'equals', text: 'Равно' },
];

const Controls = () => {
  const [filteredItem, setFilterItem] = useState(filteredItems[0].value)
  const [filteredOption, setFilteredOption] = useState(filteredOptions[0].value);
  const [valueForFiltering, setValueForFiltering] = useState('')

  const dispatch = useDispatch()

  const filterItemsChange = event => {
    setFilterItem(event.target.value);
  };

  const filterOptionsChange = event => {
    setFilteredOption(event.target.value);
  };

  const filterInputChange = event => {
    setValueForFiltering(event.target.value)
  }
  const moveFilter = () => {
    dispatch(addFilteredOptions({
      filteredItem,
      filteredOption,
      valueForFiltering
    }))
  };

  return (
    <div className="controls">
      <ControlsSelect
        options={filteredItems}
        option={filteredItem}
        onChangeFilter={filterItemsChange} />
      <ControlsSelect
        options={filteredOptions}
        option={filteredOption}
        onChangeFilter={filterOptionsChange} />
      <ControlsInput filteredItem={filteredItem}
        valueForFiltering={valueForFiltering}
        filterInputChange={filterInputChange}
        moveFilter={moveFilter} />
    </div>
  );
};

export default Controls;
