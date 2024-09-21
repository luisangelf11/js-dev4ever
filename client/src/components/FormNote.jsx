import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function FormNote({create, closeModal}) {
    const intialState = {
        titulo: '',
        descripcion: ''
    }
    const [form, setForm] = useState(intialState)

    const hanldeChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        create(form)
        setForm(intialState)
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center items-center p-2  w-auto">
            <h3 className="text-xl font-semibold text-gray-700">Agregar nueva tarea</h3>
            <input type="text" name="titulo" placeholder="Ingrese el título" className="p-2 outline-none border rounded-sm focus:border-2 focus:border-blue-700 transition-all text-xs w-[80%]" onChange={hanldeChange} value={form.titulo}/>
            <textarea name="descripcion" placeholder="Ingresa una descripción" className="p-2 outline-none border rounded-sm focus:border-2 focus:border-blue-700 transition-all text-xs resize-none h-20 w-[80%]" onChange={hanldeChange} value={form.descripcion}></textarea>
            <button className="w-[80%] p-2 text-xs text-white bg-gray-950 rounded-md transition-all hover:bg-gray-900 cursor-pointer">Guardar</button>
        </form>
    )
}
