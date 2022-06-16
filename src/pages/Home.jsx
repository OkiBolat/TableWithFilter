import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Controls from "../components/Controls/Controls";
import Table from "../components/Table/Table";
import { getItemsByFilter } from "../helpers/getItemsByFilter";
import './Home.scss';

const Home = () => {
  const items = useSelector((state) => state.reducer.filteredItems)
  const options = useSelector((state) => state.reducer.filteredParams)

  const itemsWithMemo = useMemo(() => {
    if (options.name && options.option) {
      switch (options.option) {
        case 'more':
          return getItemsByFilter.more(items, options.name, options.valueForFiltering)
        case 'less':
          return getItemsByFilter.less(items, options.name, options.valueForFiltering)
        case 'equal':
        case 'contains':
          return getItemsByFilter.contains(items, options.name, options.valueForFiltering);
        default:
          return items;
      }
    }
    return items
  }, [items, options]);

  return (
    <div className="container">
      <Controls />
      <Table items={itemsWithMemo} />
    </div>
  )
};

export default Home;
