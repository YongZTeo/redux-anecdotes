/**
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
*/
import anecdoteService from "../service/anecdote.service"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      return state.map(anecdote => anecdote.id === action.data.id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
    case "ADDNEW":
      return [...state, action.data]
    case "INITIALIZE":
      return action.data
    default:
      return state
  }
}

export const addVote = (id, anecdote) => {
  return async (dispatch) => {
    await anecdoteService.update(id, {...anecdote, votes: anecdote.votes + 1})
    dispatch({ type: "VOTE", data: { id } })
  }
}

export const addNew = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.insert(content)
    dispatch({
      type: "ADDNEW",
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({ type: "INITIALIZE", data: anecdotes })
  }
}

export default reducer