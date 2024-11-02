import React, { useRef } from 'react'

const FocusInput = () => {

    const focusInput = useRef(null);

    const handleFocus = () => {
        if (focusInput.current) {
            focusInput.current.focus();
        }
    }

  return (
    <div>
        <input type="text" ref={focusInput}/>
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default FocusInput