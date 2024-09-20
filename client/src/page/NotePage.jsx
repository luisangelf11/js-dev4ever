/* import FormNote from "../components/FormNote"; */
import Card from "../components/Card";
/* import Modal from "../components/Modal"; */

export default function NotePage() {
  return (
    <section className='w-full h-auto flex flex-col justify-center items-center'>
      <h2 className='text-2xl uppercase text-gray-900 font-semibold p-2'>App de notas</h2>
      <article className="w-[80%] grid grid-cols-3 place-items-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
      <button className="p-2 bg-gray-900 text-white rounded-full transition-all cursor-pointer hover:bg-gray-800 fixed right-5 top-96">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </section>
  )
}
