import { createPortal } from "react-dom"
import React from 'react'

const PopUp = ({ copiedValue }) => {
  return createPortal(
    <section style={{
      position: 'fixed',
      right: '5%',
      bottom: '5%',
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    }}>
        {copiedValue && (
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'black',
              padding: '10px',
            }}>
              Copied to Clipboard
            </div>
        )}
    </section>,
    document.querySelector("#popup-content")
  )
}

export default PopUp