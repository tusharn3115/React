import React, { useEffect, useState } from 'react'

const BasicEffect = () => {

    const [value, setValue] = useState('')

    useEffect(() => {
       setValue('useEffect is called')
    }, [])

  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default BasicEffect