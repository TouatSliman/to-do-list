import { useState } from 'react'
import ListItem from './componnents/ListItem'

function App() {
  const [items, setItems] = useState([])
  const addItem = () => {
    const text = document.getElementById('text').value
    if (text === '') return
    setItems([...items, <ListItem onDragStart={() => {grabed(e)}} key={items.length} text={text} />])
    document.getElementById('text').value = ''
  }
  function grabed(e) {
    e.addEventListener('dragstart', () => {
      e.classList.add('cursor-grabbing')
      console.log(e)
    })
  }
  return (
    <>
      <h1 className='text-4xl font-bold text-blue-500 md:text-6xl xl:text-8xl md:mt-6 xl:mt-8 md:mb-6 xl:mb-8 text-center  text-center mt-4'>To-Do List</h1>
      <div className='fixed w-full bottom-0 mt-4 r p-2 flex items-center justify-center gap-4 md:relative'>
        <input type="text" placeholder='Add item' id='text' className='p-2 border border-gray-300 w-[80%] rounded border-2 outline-none' />
        <button onClick={addItem} className='p-2 border border-gray-300 rounded border-2 focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600 '>Add</button>
      </div>
      <ul className='mt-4 grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2'>
        {items}
      </ul>
    </>
  )
}

export default App