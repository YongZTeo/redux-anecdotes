import React from "react";
import { connect } from "react-redux";
import { addNew } from "../reducers/anecdoteReducer";
import { setNotifMsg } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.addNew(content)
    props.setNotifMsg({ message: `Created Note "${content}"`}, 5)
  }

  return (
    <>
      <h2>create new Anecdote</h2>
      <form onSubmit={add}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

const connectedAnecdoteForm = connect(null, { addNew, setNotifMsg })(AnecdoteForm)
export default connectedAnecdoteForm