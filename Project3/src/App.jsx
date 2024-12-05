import React, { useState } from 'react'

const App = () => {

    const [color, setColor] = useState('black')

    const colorChange = (color) => {
        setColor(color)
    }

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button
                        onClick={() => colorChange("red")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-red-500 text-black shadow-lg'>
                        Red
                    </button>

                    <button
                        onClick={() => colorChange("green")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-green-500 text-black shadow-lg'>
                        Green
                    </button>

                    <button
                        onClick={() => colorChange("blue")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-blue-500 text-black shadow-lg'>
                        Blue
                    </button>

                    <button
                        onClick={() => colorChange("purple")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-purple-500 text-black shadow-lg'>
                        Purple
                    </button>

                    <button
                        onClick={() => colorChange("yellow")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-yellow-500 text-black shadow-lg'>
                        Yellow
                    </button>

                    <button
                        onClick={() => colorChange("fuchsia")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-fuchsia-500 text-black shadow-lg'>
                        Fuchsia
                    </button>

                    <button
                        onClick={() => colorChange("orange")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-orange-500 text-black shadow-lg'>
                        Orange
                    </button>

                    <button
                        onClick={() => colorChange("pink")}
                        className='outline-none px-4 py-1 rounded-full border-4 border-pink-500 text-black shadow-lg'>
                        Pink
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App