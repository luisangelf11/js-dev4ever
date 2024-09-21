import axios from 'axios'

const backend = 'http://localhost:3000/notas'

export const getNotas =async()=>
    await axios.get("http://localhost:3000/notas")

export const getNota =async(id)=>
    await axios.get(`${backend}/${id}`)

export const postNota =async(data)=>
    await axios.post(`${backend}`, data)

export const putNota =async(id, data)=>
    await axios.put(`${backend}/${id}`, data)

export const deleteNota =async(id)=>
    await axios.delete(`${backend}/${id}`)
