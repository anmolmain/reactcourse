import React, { useState } from 'react'

const Todo = () => {
    const [state, setstate] = useState("")
    const [model, setmodel] = useState("")
    const [cars, setCars] = useState([
        {
            name: 'Toyota',
            model: 1970
        },
        {
            name: 'Honda',
            model: 1954
        },
        {
            name: 'BMW',
            model: 1982
        },
        {
            name: 'Mercedes-Benz',
            model: 1963
        },

    ])
    function myfun(event) {
        setstate(event.target.value)
    }
    function modelNameChange(event) {
        setmodel(event.target.value)
    }
    function addItem() {
        let x = {
            name: state,
            model: model
        }
        if (x.name.trim() === "" || x.model.trim() ==="") {
            alert("enter something")
        }
        else {
            setCars([...cars, x]);
        }

        setstate("")
        setmodel("")
    }
    return (
        <div>
            <input type="text" value={state} placeholder='Enter a car name' onChange={myfun} />
            <br />
            <input type="text" value={model} placeholder='Enter Model name' onChange={modelNameChange} />
            <button className='btn btn-primary' onClick={addItem}>Add</button>
            {
                cars.map((n) => (
                    <div>
                        <p><b>Car Name : </b>{n.name}</p>
                        <p><b>Model Name : </b>{n.model}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Todo