import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
    const [like,setlike]=useState(0);
    const [form,setform]=useState({
        name:"",
        class:"",
        department:"",
        email:""
    })

    function submitted(e){
        e.preventDefault();
        console.log(form);
        alert(`${form.name} ${form.class} ${form.department} ${form.email}`)
        
    }

  return (
    <>
    <div className='flex w-200 justify-between items-center'>
        <h1 className='text-3xl font-bold' >USE STATE EXAMPLE</h1>
        <p className='text-3xl font-bold'>Count : {like}</p>
        {/* <button onClick={()=>setCount(count+1)} className='bg-blue-700 rounded-2xl text-2xl m-10 p-4 w-20'>+</button>
        <button onClick={()=>setCount(count=>count-1)} className='bg-red-500 rounded-2xl text-2xl m-10 p-4 w-20'>-</button> */}
        <button onClick={()=>setlike(like=>like+1)} className='bg-green-500 rounded-2xl text-2xl m-10 p-4 w-20'>❤️</button>
        <button onClick={()=>setlike(like=>like-1)} className='bg-blue-500 rounded-2xl text-2xl m-10 p-4 w-20'>💔</button>

        
    </div>
    <form onSubmit={submitted}>
            <label htmlFor="name">Name: </label>
            <input type='text' name='name' value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className='m-2 p-2 rounded-lg border'/>
            <br/>
            <label htmlFor="class">Class: </label>
            <input type="text" name="class" id="class" value={form.class} onChange={(e)=>setform({...form,class:e.target.value})} className='m-2 p-2 border rounded-lg'/>
            <br/>
            <label htmlFor="dept">Department: </label>
            <input type="text" name="dept" id="dept" value={form.department} onChange={(e)=>setform({...form,department:e.target.value})} className='m-2 p-2 border rounded-lg'/>
            <br/>
            <label htmlFor="gender">Gender: </label>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male </label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female </label><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className='m-2 p-2 border rounded-lg'/>
            <br />
            <button type="submit" className='px-4 py-2 border rounded-xl bg-yellow-500 m-10' onClick={submitted}>Submit</button>
        </form>


        

    </>
  )
}

export default State