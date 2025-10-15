import React from 'react'

const User = ({name,dept,skills}) => {
  return (
    <>
    <div>User: {name}</div>
    <div>Department: {dept}</div>
    <h3>Skills:</h3>
    <ul>
        {skills.map((data,ind)=>(
          <li key={ind}>{data}</li>
        ))}
    </ul>
    </>
  )
}

export default User