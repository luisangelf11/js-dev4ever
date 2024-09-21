import { useEffect, useState } from "react"
import { deleteNota, getNotas, postNota, putNota } from "../services/notas"
import {toast} from 'react-hot-toast'

export const useNota = () => {
    const [notas, setNota] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const {data} = await getNotas();
            setNota(data)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const createNota = async (data) => {
        try {
            await postNota(data)
            getData()
            toast.success('¡Nota agregada!')
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteNotaHook = async (id) => {
        try {
            await deleteNota(id)
            getData()
            toast.success('¡Nota eliminada!')
        } catch (error) {
            toast.error(error.message)
        }
    }

    const updateNota = async (id, data) => {
        try {
           await putNota(id, data)
           getData()
           toast.success('¡Nota actualizada!')
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {
        notas,
        createNota,
        deleteNotaHook,
        updateNota
    }
}