import React from "react";

const About_Child = (props) => {
    console.log('Props -----------', props)
    const {name, age, pin, temp} = props;
    const {name:temp22222, name2, name3} = temp;
    return(
        <>
            <h3>Child component of About.</h3>
            Name - {props.name}
            <br></br>
            Age - {props.age}
            <br></br>
            Pin - {props.pin}
            <br></br>
            Temp - {props.temp.name}
            <br></br>
            <div>--</div>
            Name - {name}
            <br></br>
            Age - {age}
            <br></br>
            Pin - {pin}
            <br></br>
            Temp - {temp.name}
            <br></br>
        </>
    )
}

export default About_Child;