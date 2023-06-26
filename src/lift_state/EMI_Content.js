import React from 'react'

const EMI_Content = (props) => {

    const {data} = props;
    const {loan, rate, tenure} = data;

    let c_amount = loan*(1 + rate/tenure)^{tenure};
    let c_interest = c_amount - loan;
    let emi = c_amount/(tenure*12)

    return (
        <div>
            <h4>EMI_Content</h4><br></br>
            <h5>EMI - { emi.toFixed(2) }</h5>
            <h5>Interest - { c_interest}</h5>
            <h5>Amount (Principal + Interest) - {c_amount }</h5>
        </div>
    )
}

export default EMI_Content
