export const getItemsByFilter = {
  more(items, dateType, valueForFiltered) {
    switch (dateType) {
      case 'name':
        return items.filter(item => item[dateType].length > valueForFiltered.length)
      case 'amount' || 'distance':
        return items.filter(item => Number(item[dateType]) > Number(valueForFiltered))
      default:
        return items;
    }
  },
  less(items, dateType, valueForFiltered) {
    switch (dateType) {
      case 'name':
        return items.filter(item => item[dateType].length < valueForFiltered)
      case 'amount' || 'distance':
        return items.filter(item => Number(item[dateType]) < Number(valueForFiltered))
      default:
        return items;
    }
  },
  contains(items, dateType, valueForFiltered) {
    return items.filter(item => item[dateType].includes(valueForFiltered))
  },
  equal(items, dateType, valueForFiltered) {
    switch (dateType) {
      case 'name':
        return items.filter(item => item[dateType].includes(valueForFiltered))
      case 'amount' || 'distance':
        return items.filter(item => Number(item[dateType]) ===  Number(valueForFiltered))
      default:
        return items;
    }
  },
} 