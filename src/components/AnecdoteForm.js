import React from "react";
import { useDispatch } from "react-redux";
import { addNew } from "../reducers/anecdoteReducer";
import { setNotifMsg, resetNotifMsg } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addNew(content))
    dispatch(setNotifMsg({ message: `Created Note "${content}"`}, 5))
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

export default AnecdoteForm