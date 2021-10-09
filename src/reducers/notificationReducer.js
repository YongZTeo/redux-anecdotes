const initialNotif = { message: "" }

const notifReducer = (state = initialNotif, action) => {
  if (action.type === "NOTIFMSG")
    return action.data
  else if (action.type === "RESETNOTIF")
    return initialNotif
  else return state
}

const notifTimeout = {
  setup: function(dispatch, seconds) {
    if (typeof this.timeoutId === 'number') {
      this.cancel();
    } 
    this.timeoutId = setTimeout(() => {
      dispatch(resetNotifMsg())
    }, seconds * 1000)
  },
  cancel: function() {
    clearTimeout(this.timeoutId)
  }
}

export const setNotifMsg = (msg, seconds) => {
  return async dispatch => {
    dispatch({ type: "NOTIFMSG", data: msg})
    notifTimeout.setup(dispatch, seconds)
  }
}

export const resetNotifMsg = () => {
  return { type: "RESETNOTIF" }
}

export default notifReducer