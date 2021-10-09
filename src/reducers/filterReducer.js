const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXTFILTER":
      return action.filter
    default:
      return state
  }
}

export const setFilter = (filter) => {
  return { type: "TEXTFILTER", filter }
}

export default filterReducer