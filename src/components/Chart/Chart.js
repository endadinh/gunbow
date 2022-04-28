import React, {Component} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

class Chart extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            chartData:{ 
                labels: ['Token1', 'Token2', 'Token3', 'Token4', 'Token5', 'Token6'],
                datasets: [
                    { 
                        label: 'Tokens',
                        data: [12, 19, 3, 5, 2, 3],
                    }
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
            }
        }
    }
    render() { 
        return(
            <div className="chart">
                <Bar 
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart;