import React, { useEffect, useState } from 'react'

const Hookstate = () => {

    const [count, setCount] = useState(10)


    useEffect(()=>{
        console.log("useeffect")

        return() => {
          console.log("logged")
        }
    },[])


  return (

    <div>
        <p>The current count is: {count}</p>
        <button onClick={() => setCount (count + 1)}>lick you!</button>
    </div>
  )
}

export default Hookstate