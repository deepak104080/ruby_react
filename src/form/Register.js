import React, { useEffect, useState } from 'react'

const Register = () => {

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
        if(formdata.name === '')  {
            tempErrorObj.name = 'Name is empty.'
        }

        //email is empty or not
        if(formdata.email === '')  {
            tempErrorObj.email = 'Email is empty.'
        }


        //mobile is empty or not
        if(formdata.mobile === '')  {
            tempErrorObj.mobile = 'Mobile is empty.'
        }

        //password is empty or not
        if(formdata.password === '')  {
            tempErrorObj.password = 'Password is empty.'
        }

        //length of password should be less than 10
        if(formdata.password.length < 10)  {
            tempErrorObj.password = 'Length of password is less than 10'
        }

        //length of mobile should be exact 10
        if(formdata.mobile.length !== 10)  {
            tempErrorObj.mobile = 'Length of mobile number is incoorect'
        }

        //format of email is coorect - hw


        //format of mobile number is correct - hw



        //console.log(tempErrorObj);
        setFormError(tempErrorObj);


        let error = Object.keys(tempErrorObj).length
        // console.log(error)
        if(error === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleSubmit = (e) => {
        //e.preventDefault(); //use if form tag is added.
        console.log(formdata);
        let errorStatus = validationFn(formdata);
        console.log(errorStatus)
        
        if(errorStatus) {
            console.log('make api call')
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
            {/* <form> */}
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
                    <input type="text" name="mobile" className="form-control" onChange={handleInputChange} value={formdata.mobile}/>
                    <span className='text-danger'>{formerror.mobile}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" name="password" className="form-control" onChange={handleInputChange} value={formdata.password}/>
                    <span className='text-danger'>{formerror.password}</span>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-10">
                    <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {/* </form> */}

        </div>
    )
}

export default Register


// name, email, mobile, password


//validation
// 1 - fields empty
// 2 - data length
// 3 - data format
// 4 - custom checks - pan number format, aadhar number format

// AAAAA1111A

// HR 26 AA 1111

// while submitting form
// while input blur
