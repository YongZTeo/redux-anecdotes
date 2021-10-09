const initialNotif = { message: "" }

const notifReducer = (state = initialNotif, action) => {
  if (action.type === "NOTIFMSG")
    return action.data
  else if (action.type === "RESETNOTIF")
    return initialNotif
  else return state
}

export const setNotifMsg = (msg, seconds) => {
  return async dispatch => {
    dispatch({ type: "NOTIFMSG", data: msg})
    setTimeout(() => {
      dispatch(resetNotifMsg())
    }, seconds * 1000)
  }
}

export const resetNotifMsg = () => {
  return { type: "RESETNOTIF" }
}

export default notifReducer