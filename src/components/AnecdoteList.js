import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVote, initializeAnecdotes } from "../reducers/anecdoteReducer"
import { setNotifMsg, resetNotifMsg } from "../reducers/notificationReducer"
import Filter from "./Filter"

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdote, filter}) => {
    if (filter && filter !== "") {
      return anecdote.filter(andt => andt.content.includes(filter))
    } else {
      return anecdote
    }
  })
  const dispatch = useDispatch()

  const vote = async (id) => {
    const anecdote = anecdotes.find(andt => id === andt.id);
    dispatch(addVote(id, anecdote))
    dispatch(setNotifMsg({ message: `Vote for "${anecdote.content}"` }, 5))
  }

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div>
      <h2>Anecdotes List</h2>
      <Filter />
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList