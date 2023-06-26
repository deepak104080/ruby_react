import React from 'react'

const EMI_Input = (props) => {
    const {data, setDataFn} = props;

    const handleBlur = (e) => {
        // console.log(e.target.name, e.target.value);
        let tempObj = {}
        tempObj[e.target.name] = e.target.value;
        //console.log(tempObj);
        setDataFn({
            ...data, ...tempObj
        })
    }
    return (
        <div>
            <div className="mb-3 row">
                <div className="col-sm-12">
                    <h2>EMI Input Data</h2>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Loan Amount</label>
                <div className="col-sm-10">
                    <input type="number" name="loan" className="form-control" onBlur={handleBlur} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Rate of Interest</label>
                <div className="col-sm-10">
                    <input type="number" name="rate" className="form-control" onBlur={handleBlur} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Tenure of Loan</label>
                <div className="col-sm-10">
                    <input type="number" name="tenure" className="form-control" onBlur={handleBlur} />
                </div>
            </div>
        </div>
    )
}

export default EMI_Input
