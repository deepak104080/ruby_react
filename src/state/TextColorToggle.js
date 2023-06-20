import React, { useState } from 'react';

const TextColorToggle = () => {

    const [color, setColor] = useState(true); //true-red, false-blue

    function redFn() {
        setColor(true);
    }

    function blueFn() {
        setColor(false);
    }

    return(
        <>
            <h2 className={color ? 'redText' : 'blueText'}>Text Color</h2>
            {/* <h2 className="redText">Text Color</h2> */}
            <button onClick={redFn}>Red Button</button>
            <button onClick={blueFn}>Blue Button</button>
        </>
    )
}

export default TextColorToggle;