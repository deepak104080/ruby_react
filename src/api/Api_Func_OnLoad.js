import React, { useEffect, useState } from 'react'

const Api_Func_Onload = () => {

    const [apidata, setapidata] = useState([]);

    const callApiFn = async () => {
        let temp = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
        let data = await temp.json()
        console.log(data);
        setapidata(data);
    }

    useEffect(() => {
        callApiFn();
    }, [])

    return (
        <div>


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

export default Api_Func_Onload
