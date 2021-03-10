import React from 'react'

function Card({ item }) {

  let tags
  if(item.tags){
   tags = item.tags.split(',')
}

  return (
    <div className='max-w-xs mx-3 my-3 shadow-xl rounded-lg overflow-hidden bg-white'>
      <img src={item.webformatURL} alt="" />
      <div className='w-full text-lg text-center py-4 px-5 text-blue-900 font-bold'>
        CREATED BY {item.user}
      </div>
      <div className='w-full px-5 py-4 flex flex-row justify-around'>
        <div className='text-center bg-blue-500 py-1 px-1 rounded-md text-white w-96 mx-1'>
          <div>
            views
            </div>
          {item.views}
        </div>
        <div className='text-center bg-blue-500 py-1 px-1 rounded-md text-white w-96 mx-1'>
          <div>
            likes
            </div>
          {item.likes}
        </div>
        <div className='text-center bg-blue-500 py-1 px-1 rounded-md text-white w-96 mx-1'>
          <div>
            downloads
            </div>
          {item.downloads}
        </div>
      </div>
      <div>
        <div className='text-center text-blue-900 font-bold'>
          TAGS
          </div>
        <div className='flex flex-row justify-around px-3 py-3 text-center'>
          {tags && tags.map(tag=>{
            return <div className='bg-gray-400 px-1 py-1 rounded-md flex-grow mx-1'>
              #{tag}
            </div> 
            })}
        </div>
      </div>
    </div >
  )
}

export default Card
