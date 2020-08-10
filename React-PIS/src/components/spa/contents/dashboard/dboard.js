import React, { useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
// import {Line} from 'react-chartjs-2';
const DBoard = () => {
    const [chartData, setChartData] = useState({});
    const [prodTitle, setProdTitle] = useState({});
    const [prodInstock, setProdInstock] = useState({});
    const chart = () => {
        let prodTit = [];
        let prodIns = [];
        axios.get('http://localhost:3000/allProducts').then((response) => {
            console.log(response.data);
            for (const dataObj of response.data) {
                prodTit.push(dataObj.title);
                prodIns.push(parseInt(dataObj.instock))
            }
        }, (error) => {
            console.log(error.data);
        });
        console.log(prodIns, prodTit);

        setChartData({
            label: prodTit,
            datasets: [
                {
                    label: "Product Stock Availability/day",
                    data: prodIns,
                    backgroundColor: "red",
                    borderwidth: 4
                }
            ]
        })
    }
}
// return (
//     <div className="App">
//         <h3>DashBoard</h3>
//     </div>
// );