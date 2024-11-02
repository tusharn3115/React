import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [api, setApi] = useState([])

    useEffect(() => {
        async function getData() {
            let res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            )
            let data = await res.json()
            if (data && data.length) {
                setApi(data)
            }
        }
        getData()
    },[])

  return (
    <div>
        {/* <ul>
            {api.map(obj => (
                <li key={obj.id}>{obj.title}</li>
            ))}
        </ul> */}
        <h1>First Post Title : </h1>
        { api.length > 0 ? <h2>{api[0].title}</h2> : <p>Loading....</p> }
    </div>
  )
}

export default FetchDataEffect