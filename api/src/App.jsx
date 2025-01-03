import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <div className='bg-gray-950 p-2 mx-10 rounded'>
        {
          data.map((elem, idx) => {
            return <div
              key={idx}
              className='bg-gray-50 text-black flex items-center justify-between w-full p-6'>
              <img
                className='w-80 h-80 object-cover rounded'
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