import React, {useState} from "react";

const Counter = () => {

    //let count = 0;
    const [count, setCount] = useState(0);
    //useState is a hook substituted for State concept which creates state varibelin functional component.
    //Desturctuing - useState returns an array
    //1st Element - count - State varibale
    //2nd Element - setCount - Function to update State varibale
    //Argument passed in useState decides 2 things - data type of state varibale and the initial value.
    //On completion of setCount - automatically component re-renders.
    //setCount works in async mode.

    // 0 - number
    // 'string' - String
    // [] - array
    // {} - object
    // {
    //     name: 'deepak'
    // }

    function increaseFn() {
        console.log('Increase button clicked...........');
        //incrase count by 1
        //setCount(count + 1)
        setCount(count => count + 1);
        console.log('Count', count);//Prints old value of count.
    }

    function decreaseFn() {
        console.log('Decrease button clicked...........');
        //decrease count by 1
        //setCount(count -1)
        setCount(count => count - 1);
    }

    return (
        <>
            <h2>Counter - Using Functional Component - useState</h2>

            <div>Counter - {count}</div>
            <br></br>

            <button onClick={increaseFn}>Increase</button>
            <button onClick={decreaseFn}>Decrease</button>
        </>
    )
}

export default Counter;




// State variables



// Class Components - State, Context
// Functional Components - Hooks (Substitute of React Features for Class Components)