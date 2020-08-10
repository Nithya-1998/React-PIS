import React, { useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { Line } from 'react-chartjs-2';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allproduct: []
        }
        this.getAllProducts();
        // this.componentDidUpdate();
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/allProducts').then((response) => {
            console.log(response.data);
            this.setState({ allproduct: response.data });
        }, (error) => {
            console.log(error.data);
        });
    }
    componentDidUpdate() {
        console.log(this.state.allproduct);
        let label = this.state.allproduct.forEach((prod) => {
            let temp = prod.title;
            return (temp);
        });
        console.log(label);
    }
    render() {

        return (
            <div>
                <div><h2>Dashboard Page</h2></div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Product Name', 'InStock'],
                        ['Mobile', 78],
                        ['Laptop', 54],
                        ['Fash Wash', 39],
                        ['TV', 55],
                        ['Bag', 45],
                    ]}
                    options={{
                        title: 'Product Stock Availability/day',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}


export default Dashboard;