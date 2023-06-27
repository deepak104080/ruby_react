import React, { useContext } from 'react';
import { GlobalContext } from '../App';

const Contact = () => {

    const localTemp = useContext(GlobalContext);
    return (
        <>
            <h2>Contact Page</h2>
            <br></br>
            <div>{localTemp.globalState.globalname}</div>
        </>
    )
}

export default Contact;