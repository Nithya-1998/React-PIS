import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import ChartContainer from './chartcontainer';
// import { Line } from 'react-chartjs-2';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allproduct: [],
            chartData: [],
            dataLoadingStatus: 'loading'
        }

        this.getAllProducts();
        // this.componentDidUpdate();
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/allProducts').then((response) => {
            console.log(response.data);
            let tit = [];
            let instk = [];
            for (let obj of response.data) {
                tit.push(obj.title);
                instk.push(obj.inStock)
            }
            console.log(tit);
            console.log(instk);
            let temp = {
                "title": tit,
                "instock": instk
            }
            let chartData = [['Product Name', 'In Stock Rate']];
            for (let i = 0; i < tit.length; i += 1) {
                chartData.push([tit[i], instk[i]]);
            }
            console.log(chartData);
            this.renderData(chartData);
            this.setState({ dataLoadingStatus: 'ready', chartData: chartData });
            this.setState({ allproduct: response.data });
        }, (error) => {
            console.log(error.data);
        });
    }
    renderData = (temp) => {
        console.log(temp);
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={
                    // temp
                    [['Product Name', 'InStock'],
                    ['Mobile', 78],
                    ['Laptop', 54],
                    ['Fash Wash', 39],
                    ['TV', 55],
                    ['Bag', 45],
                    ]}
                options={{
                    title: 'Product Stock Availability/day',
                }}
                // rootProps={{ 'data-testid': '1' }}
            />) 
    }
    render() {
        return (
            <div>
                <div><h2>Dashboard Page</h2></div>
                {this.renderData()}
                <ChartContainer />
            </div>
        );
    }
}


export default Dashboard;
