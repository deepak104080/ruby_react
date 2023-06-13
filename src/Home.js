import React, {Fragment} from "react";


function Home() {
    const name = 'Deepak Kumar';
    const location = 'GGN';
    const cars = ['Maruti', 'Honda', 'Kia', 'Tata', 'Maruti', 'Honda', 'Kia', 'Tata', 'Maruti', 'Honda', 'Kia', 'Tata']

    return(
        <div>
            <div>My Name is {name}. I live in {location}.</div>
            <div>
                <ul>
                    {/* <li>{cars[0]}</li>
                    <li>{cars[1]}</li>
                    <li>{cars[2]}</li>
                    <li>{cars[3]}</li> */}

                    {
                        cars.map(item => (
                            <li>{item}</li>
                        ))
                    }
                     </ul>    
            </div>
            <div>-----------------------</div>
            <div class="table">
                    {
                        cars.map((item, index) => (
                            <Fragment>
                                <div>{index+1}</div>
                                <span>{item}</span>
                            </Fragment>
                        ))
                    }
                    </div>
               
        </div>
    ) 

}

export default Home;



// function abc() {
//     let a = 5;
//     let b = 6;
//     return a
// }

// abc()


// JSX Loop
// for loop / while
// foreach
// for of/in
// array.map - allowed