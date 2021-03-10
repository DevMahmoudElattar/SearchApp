import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './componants/Card'

function App() {
  const [images, setImages] = useState([{}]);
  const [term, setTerm] = useState('mohamed');
  const [holder, setHolder] = useState('');

  const URL = `https://pixabay.com/api/?key=20592673-90d7607d226b6575a5e524ee9&q=${term}&image_type=photo&pretty=true`;
  console.log(URL);
  useEffect(() => {
    async function GetData() {
      const data = await fetch(URL);
      const response = await data.json();
      setImages(response.hits)
    }
    GetData()
  }, [images]);

  const handlesubmit = (e) => {
    e.preventDefault()
    setTerm(holder)
  }

  const handlechange = (e) => {
    setHolder(e.target.value)
  }

  return (
    <div className='text-center' >
      <form onSubmit={handlesubmit} action="" className='mx-4 my-4'>
        <input className='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-3 py-3 rounded-md' onChange={handlechange} type="text" />
        <button className='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md mx-3 px-3 py-3 text-white' type="submit">search</button>
      </form>
      <div className='grid grid-cols-4 gap-3'>
        {
          images.map(image => {
            return <Card key={image.id} item={image} />
          })}
      </div>
    </div>
  )
}

export default App

