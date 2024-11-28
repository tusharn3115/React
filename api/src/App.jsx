import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    setData(response.data);
  }

  return (
    <>
      <button
        onClick={getData}
        className='bg-teal-700 rounded px-3 py-2 m-10 font-bold text-white hover:bg-teal-950 duration-100 active:scale-90'>Get Data</button>
      <div className='bg-gray-950 p-5 mx-10'>
        {
          data.map((elem, idx) => {
            return <div
              key={idx}
              className='bg-gray-50 text-black flex items-center justify-between w-full p-6'>
              <img
                className='w-80 h-80 object-cover'
                src={elem.download_url}
                alt="profile" />
              <h1 className='text-2xl font-semibold'>{elem.author}</h1>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App