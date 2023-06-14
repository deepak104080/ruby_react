import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increaseFn() {
        console.log('Increase button clicked...........');
        setCount(count => count + 1);
    }

    function decreaseFn() {
        console.log('Decrease button clicked...........');
        setCount(count => count - 1);
    }

    return (
        <>
            <h2>Counter - Using Functional Component - useState</h2>
            <div>Counter - {count}</div><br></br>
            <button onClick={increaseFn}>Increase</button>
            <button onClick={decreaseFn}>Decrease</button>
        </>
    )
}

export default Counter;