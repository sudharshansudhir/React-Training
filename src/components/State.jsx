import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
    const [like,setlike]=useState(0);

  return (
    <div className='flex w-200 justify-between items-center'>
        <h1 className='text-3xl font-bold' >USE STATE EXAMPLE</h1>
        <p className='text-3xl font-bold'>Count : {like}</p>
        {/* <button onClick={()=>setCount(count+1)} className='bg-blue-700 rounded-2xl text-2xl m-10 p-4 w-20'>+</button>
        <button onClick={()=>setCount(count=>count-1)} className='bg-red-500 rounded-2xl text-2xl m-10 p-4 w-20'>-</button> */}
        <button onClick={()=>setlike(like=>like+1)} className='bg-green-500 rounded-2xl text-2xl m-10 p-4 w-20'>❤️</button>
        <button onClick={()=>setlike(like=>like-1)} className='bg-blue-500 rounded-2xl text-2xl m-10 p-4 w-20'>💔</button>
    </div>
  )
}

export default State