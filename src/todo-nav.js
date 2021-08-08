import React, {useState} from 'react'

export default function Todonav() {
    const [state, setstate] = useState(0)
    return (
        <>
           <h1>Heading 1</h1> 
           <p>This is a blody fucking paragraph.{state}</p>
           <button onClick={e=>setstate(state+1)}>Button</button>
        </>
    )
}
