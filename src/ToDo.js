import React, { useState } from "react";

const ToDo = () => {

    const [todo, setToDo] = useState([]);

    function addToDo(e) {
        console.log(e.target.value);
        //todo.push(e.target.value);//invalid in react
        let temp = [...todo, e.target.value];
        setToDo(temp)
    }


    return(
        <>
        <h2>To Do App - Functional Component</h2>

        {/* <input type="text" onChange={}/>
        <button onClick={}>Add in To Do</button> */}


        <input type="text" onBlur={addToDo}/>


        <ul>
            {
                //todo &&
                todo.map((item, index) => (
                    <li>{item}</li>
                ))
            }
        </ul>
        
        </>
    )
}

export default ToDo;

//DOM Events
//State