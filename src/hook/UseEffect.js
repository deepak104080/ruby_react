import React, {useEffect, useState} from "react";

const UseEffect = () => {

    // componentDidMount - just after first time render
    // componentDidUpdate - just after next time render
    // componentWillUnmount - just before unmounting

    const [count, setCount] = useState(0);

    const [status, setStatus] = useState(false);


    function increaseFn() {
        //console.log('Increase button clicked...........');
        //incrase count by 1
        //setCount(count + 1)
        setCount(count => count + 1);
        console.log('Count', count);//Prints old value of count.
    }

    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('1 - UseEffect is running.......................')
    })

    //componentDidMount
    useEffect(() => {
        console.log('2 - componentDidMount UseEffect is running.......................')
    }, [])

    //componentWillUnmount
    useEffect(() => {
        return() => {
            console.log('3 - componentWillUnmount useEffect.')
        }
    }, [])

    //componentDidUpdate
    useEffect(() => {
        console.log('4 - useEffect - count updation')
    }, [count])

    //componentDidUpdate
    useEffect(() => {
        console.log('5 - useEffect - status updation')
    }, [status])

    //componentDidUpdate
    useEffect(() => {
        console.log('6 - useEffect - count and status updation')
    }, [count, status])

    return(
        <>
            <h2>Hook - useEffect</h2>
            <br></br>

            <div>Counter - {count}</div>
            <br></br>

            <button onClick={increaseFn}>Increase</button>

            <br></br>
            <div>-----------------------</div>
            <br></br>

            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(false)}>Hide</button>

            <br></br>
            {
                status && <div>Show Hide Data...</div>
            }

        </>
    )
}

export default UseEffect;


// All hooks will satrt with 'use';