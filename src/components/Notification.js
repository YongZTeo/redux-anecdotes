import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notif = useSelector(state => state.notif)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notif.message && notif.message !== "") {
    return (
      <div style={style}>
        {notif.message}
      </div>
    )
  } else { return <div></div> }
}

export default Notification