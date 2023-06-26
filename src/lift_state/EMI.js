import React, { useState } from 'react';
import EMI_Input from './EMI_Input';
import EMI_Content from './EMI_Content';
import EMI_Graph from './EMI_Graph';

const EMI = () => {

    let tempObj = {
        loan: 0,
        rate: 0,
        tenure: 0
    }
    const [formdata, setFormdata] = useState(tempObj);

    return (
        <div>
            <div className='row'>
                Loan - {formdata.loan}<br></br>
                Rate - {formdata.rate}<br></br>
                Tenure - {formdata.tenure}<br></br>
                <div className='col-12 bg-success-subtle'>
                    <EMI_Input data = {formdata} setDataFn = {setFormdata} />
                </div>
                <div className='col-6 bg-danger-subtle'>
                    <EMI_Content data = {formdata} />
                </div>
                <div className='col-6 bg-primary-subtle'>
                    <EMI_Graph data = {formdata}  />
                </div>
            </div>

        </div>
    )
}

export default EMI

//Lift State Up