// import React from 'react'
// import { useState } from 'react'
// const MainPage2 = () => {
//     const [state, setState] = useState("Hello")
//     function myfun() {
//         setState("Hiiiiii")
//     }
//     return (
//         <div>
//             <h1>{state}</h1>
//             {/* <button onClick={()=>{setState('Hiiii')}}>Click</button> */}
//             <button onClick={myfun}>Click</button>
//         </div>
//     )
// }

// export default MainPage2


// default: hello
// click : hiii



import React, { useState } from 'react'
import './MainPage2.css'
const MainPage2 = () => {
    const [state, setState] = useState("Please select button")
    //  [variable,changingFunction]    (defaultValue)
    function redFun() {
        setState("Red")
    }
    function blueFun() {
        setState("Blue")
    }
    function greenFun() {
        setState("Green")
    }
    function yellowFun() {
        setState("Yellow")
    }
    return (
        <div>
            <div className="mydiv">
                My color is <h1 className={`${state}`}>{state}</h1>
            </div>
            <button onClick={redFun}>Red</button>
            <button onClick={blueFun}>Blue</button>
            <button onClick={greenFun}>Green</button>
            <button onClick={yellowFun}>Yellow</button>
        </div>
    )
}

export default MainPage2


// import React, { useState } from 'react'

// const MainPage2 = () => {
//     const [counter, setcounter] = useState(0)
//     function increment() {
//         // H.W Not greater than 10
//         setcounter(counter+1)
//     }
//     function decrement() {
//         // H.W Not less than 0
//         setcounter(counter-1)
//     }
//     return (
//         <div>
//             <h1>Counter APP</h1>
//             Count : {counter}
//             <br />
//             <button onClick={increment}>INCREMENT</button>
//             <button onClick={decrement}>DECREMENT</button>
//         </div>
//     )
// }

// export default MainPage2