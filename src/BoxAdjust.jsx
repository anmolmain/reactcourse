import React, { useState } from 'react'

const BoxAdjust = () => {
    const [height, setheight] = useState(10)
    const [width, setwidth] = useState(10)
    function myFun() {
        let newheight = Math.floor(Math.random() * 500);
        let newwidth = Math.floor(Math.random() * 500);
        setheight(newheight)
        setwidth(newwidth)
    }
    return (
        <>
            <div className='parentDiv'>
            <button className='btn btn-primary' onClick={myFun} style={{padding:"2%"}}>CLick Here</button>
                <div className="childDiv m-auto" style={{ height: `${height}px`, width: `${width}px`}}></div>
            </div >
        </>
    )
}

export default BoxAdjust