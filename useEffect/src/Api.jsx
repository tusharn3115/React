import React, { useEffect, useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            )

            const data = await res.json()
            if (data && data.length) {
                setData(data)
            }
        }
        getData()
    }, [])

    return (
        <div>
            <ul>
                {data.map(todo => (
                    <section key={todo.id}>
                        <li>Title -- {todo.title}</li>
                        <li>Body -- {todo.body}</li>
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default Api