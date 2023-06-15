import React, { useState } from "react";

const ToDo1 = () => {

    //state varibale to store actual to do list
    const [todo, setToDo] = useState([]);

    //temp variable to store input data temporarily
    const [temp, setTemp] = useState('');

    //fn for final addition in to do list
    function addToDo() {
        //console.log(e.target.value);
        let temp1 = [...todo, temp];
        setToDo(temp1);
        //empty the input field
        setTemp('');
    }

    function tempInputFn(event) {
        console.log(event.target.value);
        setTemp(event.target.value);
    }

    return(
        <>
        <h2 className="heading">To Do App - Final</h2>

        <input type="text" onChange={tempInputFn} value={temp}/>

        <button onClick={addToDo} style={{backgroundColor: '#5a91a6'}}>Add in To Do</button>

        <ol>
            {
                todo && todo.map((item, index) => (
                    <li key={index + item}>{item}</li>
                ))
            }
        </ol>

            <div>-----------------------------</div>
        <ul>
            {
                todo && todo.map((item, index) => (
                    <li key={index + item} >{index + 1} {item}</li>
                ))
            }
        </ul>
        <div>-----------------------------</div>
        </>
    )
}

export default ToDo1;


// key
// && operator


{/* hyundai0
        tata1
        maruti2
        kia3
        kia4
        maruti5 */}

