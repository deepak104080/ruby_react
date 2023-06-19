import React from 'react';
import About_Child from './About_Child';

const About = () => {
    let company_name = 'Newton School';
    let obj = {
        name: 'aew',
        name2: '4',
        name3: 'aerrw'
    }
    return (
        <>
            <h2>About Page</h2>
            <div>---------------</div>
            <About_Child name = {company_name} age="111111" pin="5555" temp={obj}/>
        </>
    )
}

export default About;