import React, {useState, useEffect} from 'react'

const Useeffect = () => {

    const [comment, setComment] = useState("Hi you!")

    useEffect(() => {
        console.log("trigger use effect")
    })

    const commentHandler = () => {
        setComment("I am fine!")
    }

  return (
    <div>
        <h1>UseEffect</h1>
        <h2>{comment}</h2>
        <button onClick={commentHandler}>Reply</button>
    </div>
  )
}

export default Useeffect