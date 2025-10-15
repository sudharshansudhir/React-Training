import React from 'react'

const Subject = ({name}) => {
  return (
    <div>
        <h2>AVAILABLE COURSES</h2>
        <ul>
            {name.map((Subject,id)=>{
                return <li key={id}>{Subject}</li>
            })}
        </ul>
    </div>
  )
}

export default Subject