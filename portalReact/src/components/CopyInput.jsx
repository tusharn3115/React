import React, { useState } from 'react'
import PopUp from './PopUp'

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('')
    const [copiedValue, setCopiedValue] = useState('')

    const handleClick = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopiedValue(true)
            setTimeout(() => setCopiedValue(false), 5000)
        })
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{padding: '10px', fontSize: '18px', borderRadius: '5px', border: '2px solid #000'}}/>
        <button onClick={handleClick} style={{padding: '10px 20px', fontSize: '18px', marginTop: '20px' ,borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: '#fff', cursor: 'pointer'}}>
            {copiedValue ? 'Copied!' : 'Copy'}
        </button>
        <PopUp copiedValue={copiedValue} />
    </div>
  )
}

export default CopyInput