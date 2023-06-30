import React, { useEffect, useState } from 'react'

const Api_Func = () => {

    const [apidata, setapidata] = useState([]);

    const [apistatus, setapistatus] = useState(false);

    const callApiFn = async () => {
        console.log('button clicked.')
        setapistatus(true);
        let temp = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
        let data = await temp.json()
        console.log(data);
        setapistatus(false)
        setapidata(data);
    }

    return (
        <div>

            <button onClick={callApiFn}>Call API</button>

            <br></br>

            

            <div>
                <table className='table table-responsive table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Age</th>
                            <th>DOB</th>
                            <th>Salary</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    {apistatus && <img src='https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg' className='img-fluid' width={400}/>}
                    <tbody>
                        {
                            apidata && apidata.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={item.imageUrl} /></td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contactNumber}</td>
                                    <td>{item.age}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.address}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Api_Func


//HW
// Implement the same in class component
// Improve loader experience - modal type look