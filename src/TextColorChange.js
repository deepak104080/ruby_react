import React, { useState } from 'react';

const TextColorChange = () => {

    const [color, setColor] = useState('red');

    function colorFn(color) {
        setColor(color);
    }

    return(
        <>
            <h2 style={{color: color}}>Text Color Change</h2>
            {/* <h2 className="redText">Text Color</h2> */}
            <button onClick={() => colorFn('red')}>Red Button</button>
            <button onClick={() => colorFn('blue')}>Blue Button</button>
            <button onClick={() => colorFn('yellow')}>Yellow Button</button>
            <button onClick={() => colorFn('#1a408f')}>Color 1 Button</button>
            <button onClick={() => colorFn('#af7512')}>Color 2 Button</button>

            {/* //create color input
            //create chnage button
            //extra temp input state variable */}
        </>
    )
}

export default TextColorChange;