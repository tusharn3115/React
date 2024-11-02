import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !quantity) return

        const newItem = {
            name,
            quantity: parseInt(quantity)
        }

        setItems((prevItems) => [...prevItems, newItem])
        setName('')
        setQuantity('')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>Shopping List</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
                <input
                    type="text"
                    placeholder='Item name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                />

                <input
                    type="text"
                    placeholder='Quantity...'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
                />

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Item</button>
            </form>

            <ul style={{ listStyle: 'none', padding: '0', margin: '0', width: '300px' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ShoppingList