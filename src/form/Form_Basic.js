import React, { useState } from "react";

const Form_Basic = () => {

    const [formdata, setFormdata] = useState({});
    const [tempName, setTempName] = useState('');
    const [tempCity, setTempCity] = useState('');

    function submitFn() {
        console.log('Name - ', tempName);
        console.log('City - ', tempCity);
        
        let obj = {
            name: tempName,
            city: tempCity
        }
        setFormdata(obj)
    }

    return(
        <>
        <h2>Registration Form</h2>
        <br></br>
        Name: <input type="text" className="form-control" onChange={(e) => setTempName(e.target.value)} value={tempName}/>
        <br></br>
        City: <input type="text" className="form-control" onChange={(e) => setTempCity(e.target.value)} value={tempCity}/>
        <br></br>

        <button className="btn btn-primary" onClick={submitFn}>Submit</button>
        <br></br>

        <div>-----------------------------</div>
        <br></br>
        Name Entered - {formdata.name}
        <br></br>
        City Entered - {formdata.city}
        </>
    )
}

export default Form_Basic;




