import React, { useState } from 'react'

const ColorFlipper = () => {
    const [r, setr] = useState(0)
    const [g, setg] = useState(0)
    const [b, setb] = useState(0)
    function changeVal() {
        let nr = Math.floor(Math.random() * 256);
        let ng = Math.floor(Math.random() * 256);
        let nb = Math.floor(Math.random() * 256);
        setr(nr)
        setg(ng)
        setb(nb)
    }
    return (
        // <div className='defineColor' style={{backgroundColor:"rgb(26,65,61)"}}>
        <div className='defineColor' style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <div className="textDiv">
                <h2> Red : {r} </h2>
                <h2> Blue : {b} </h2>
                <h2> Green : {g} </h2>
                <br />
            <button onClick={changeVal} className='btn btn-primary'>Change values</button>
            </div>
        </div>
    )
}

export default ColorFlipper