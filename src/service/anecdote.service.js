import axios from "axios"

const baseUrl = "http://localhost:3003/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const insert = async (content) => {
  const anecdote = { content, votes: 0 }
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const update = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote);
  return response.data
}

const anecdoteService = { getAll, insert, update }

export default anecdoteService