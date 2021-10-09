import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notif.message && props.notif.message !== "") {
    return (
      <div style={style}>
        {props.notif.message}
      </div>
    )
  } else { return <div></div> }
}

const mapStateToProp = (state) => {
  return { notif: state.notif }
}
const ConnectedNotification = connect(mapStateToProp)(Notification)
export default ConnectedNotification