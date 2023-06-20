import React from "react";

const Conditionals = () => {
    let status = true;
    let status2 = false;
    let status3 = true;

    // if(true) {

    // }
    // else {

    // }
    return(
        <>
            {/* if status false 
            display false line
            else 
            display true line */}

            {/* 1 - if - && operator

            2 - if else - ternary opeartor - consition ? true implementation : false implementation*/}

            {
                status && <div>Condition is true</div>
            }
            <div>-------------------------</div>

            {
                status2 ? <div>Condition is true</div> : <div>Condition is false</div>
            }

        </>
    )
}

export default Conditionals;









// let temp = true && 'name';
// let temp1 = true && 5555;

// let temp2 = false && 'name';
// let temp3 = false && 55555;

// let component = true && <div>My name is Deepak</div>
// let component1 = false && <div>My name is Deepak</div>

// if('string') {

// }
// if(5555) {
    
// }
// if(true) {
    
// }

// Boolean - false, 0, undefined, ' ', null, ''


// let temp = true || 'name';
// let temp1 = true || 5555;

// let temp2 = false || 'name';
// let temp3 = false || 55555;




// whenever there is any change is state or props varibale, re-render of components will trigger by default.
// dom events
// api calls
// event listeners/timer