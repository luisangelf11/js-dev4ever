import FormNote from "../components/FormNote";
import { useState } from "react";
import Card from "../components/Card";
import { useNota } from "../hooks/useNotas";
import Modal from "../components/Modal";
import EditNote from '../components/EditNote'
import {Toaster} from 'react-hot-toast'

export default function NotePage() {
  const [modalCreate, setModalCreate] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)
  const [id, setId] = useState(0)

  const getId =(myId)=> {setId(myId)
    setModalUpdate(true)
  }

  const closeEditModal = ()=>{
    setId(0)
    setModalUpdate(false)
  }

  const openModal =()=> setModalCreate(true)
  const closeModal =()=> setModalCreate(false)

  const {notas, createNota, deleteNotaHook, updateNota} = useNota()
  return (
    <section className='w-full h-auto flex flex-col justify-center items-center'>
      <h2 className='text-2xl uppercase text-gray-900 font-semibold p-2'>App de notas</h2>
      <article className="w-[80%] grid grid-cols-3 place-items-center gap-4">
        {notas.map(el=> <Card key={el.id} titulo={el.titulo} descripcion={el.descripcion} fecha={el.fecha_creacion} del={deleteNotaHook} id={el.id} getId={getId}/>)}
      </article>
      <button className="p-2 bg-gray-900 text-white rounded-full transition-all cursor-pointer hover:bg-gray-800 fixed right-5 top-96" onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
      {modalCreate && <Modal onclose={closeModal}>
          <FormNote create={createNota} closeModal={closeModal} />
        </Modal>}
        {modalUpdate && <Modal onclose={closeEditModal}>
            <EditNote update={updateNota} id={id} closeEditModal={closeEditModal}/>
          </Modal>}
        <Toaster position="top-center" />
    </section>
  )
}
