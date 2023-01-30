import React, { useState } from 'react'

const Usestate = () => {

  //you can only use hooks in class component

const [count, setCount] =useState(5);


// function minusCount(){
//     setCount(count - 1)
// }
const minusCount = () => setCount(count - 1)

const addCount = () => setCount(count + 1)

  return (
    <div>
      <h1>Calc: </h1>
        <button onClick={minusCount}> - </button>
        <span> {count} </span>
        <button onClick={addCount}> + </button>
    </div>
  )
}

export default Usestate