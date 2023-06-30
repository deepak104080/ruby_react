import React, { useEffect, useState } from 'react'

const FormApi = () => {

    let temp = {
        name: '',
        email: '',
        mobile: '',
        password: ''
    }

    const [formdata, setFormData] = useState(temp);
    const [formerror, setFormError] = useState({});

    const handleInputChange = (e) => {
        //console.log(e.target.name, e.target.value);
        let tempObj = {}
        tempObj[e.target.name] = e.target.value;
        //console.log(tempObj);
        setFormData({
            ...formdata, ...tempObj
        })
        //console.log(formdata); - it will print older data.
    }

    const validationFn = (formdata) => {

        let tempErrorObj = {}

        //name is empty or not
        if (formdata.name === '') {
            tempErrorObj.name = 'Name is empty.'
        }

        //email is empty or not
        if (formdata.email === '') {
            tempErrorObj.email = 'Email is empty.'
        }


        //mobile is empty or not
        if (formdata.mobile === '') {
            tempErrorObj.mobile = 'Mobile is empty.'
        }

        //password is empty or not
        if (formdata.password === '') {
            tempErrorObj.password = 'Password is empty.'
        }

        //length of password should be less than 10
        if (formdata.password.length < 10) {
            tempErrorObj.password = 'Length of password is less than 10'
        }

        //length of mobile should be exact 10
        if (formdata.mobile.length !== 10) {
            tempErrorObj.mobile = 'Length of mobile number is incoorect'
        }

        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        //format of email is coorect - hw
        if (!regex.test(formdata.email)) {
            tempErrorObj.email = 'Email format in invalid'
        }

        //format of mobile number is correct - hw
        let regexmobile = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
        if (!regexmobile.test(formdata.mobile)) {
            tempErrorObj.mobile = 'Mobile format in invalid'
        }


        //console.log(tempErrorObj);
        setFormError(tempErrorObj);


        let error = Object.keys(tempErrorObj).length
        // console.log(error)
        if (error === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    const callApiFn = async () => {
        //formdata
        //setapistatus(true);loader
        let url = 'http://localhost:3001/comments';

        let temp = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: 2,
                body: "some comment new",
                postId: 2

            }),
            //body: JSON.stringify(formdata),
            // module, credentials, redirect, referrerpolicy
        })

        let data = await temp.json()
        //setapistatus(false);loader
        console.log('response from POST API', data);

        //npm install -g json-server
        //json-server --watch db.json --port 3001
        //temp commnda to create json-server at local
    }

    const handleSubmit = (e) => {
        console.log(formdata);
        let errorStatus = validationFn(formdata);
        console.log(errorStatus)

        if (errorStatus) {
            console.log('make api call')
            callApiFn()
            alert('api call done');
            setFormData(temp);
        }
    }

    useEffect(() => {
        console.log('Form Data', formdata);
    }, [formdata])

    useEffect(() => {
        console.log('Form Error', formerror);
    }, [formerror])

    return (
        <div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <h2>Registration Form</h2>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name="name" className="form-control" onChange={handleInputChange} value={formdata.name} />
                    <span className='text-danger'>{formerror.name}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" name="email" className="form-control" onChange={handleInputChange} value={formdata.email} />
                    <span className='text-danger'>{formerror.email}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Mobile</label>
                <div className="col-sm-10">
                    <input type="text" name="mobile" className="form-control" onChange={handleInputChange} value={formdata.mobile} />
                    <span className='text-danger'>{formerror.mobile}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" name="password" className="form-control" onChange={handleInputChange} value={formdata.password} />
                    <span className='text-danger'>{formerror.password}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-10">
                    <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default FormApi


