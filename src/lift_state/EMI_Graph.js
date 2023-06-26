import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMI_Graph = (props) => {

    const {data} = props;
    const {loan, rate, tenure} = data;

    let c_amount = loan*(1 + rate/tenure)^{tenure};
    let c_interest = c_amount - loan;

    const dataChart = {
        labels: ['Pricipal', 'Interest'],
        datasets: [
            {
                label: 'Loan - Principal and Interest',
                data: [loan, c_interest],
                backgroundColor: [
                    'rgba(55, 99, 132, 0.5)',
                    'rgba(155, 150, 11, 0.5)'
                ],
                borderColor: [
                    'rgba(55, 99, 132, 0.5)',
                    'rgba(155, 150, 11, 0.5)'
                ],
                borderWidth: 1
            }
        ]
    }

    return (
        <div>
            <h4>EMI_Graph</h4>

            <br></br>

            <Pie data = {dataChart}/>

        </div>
    )
}

export default EMI_Graph
