import React, { useState } from 'react'

const FormData = () => {
    const [state, setstate] = useState("")
    function myFun(event) {
        // alert(e.target.value)
        setstate(event.target.value)
    }
    return (
        <div>
            Enter your name :
            <input type="text" value={state} onChange={myFun} />
            {/* <button className='btn btn-primary' >Click</button> */}
            <h1>My name is :{state} </h1>
        </div>
    )
}

export default FormData