import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './productstyle.css'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            cost: this.props.cost,
            instock: this.props.instock,
            description: this.props.description,
            category: this.props.category,
            imgurl: this.props.imgurl,
            editId: 0,
            deleteId: 0,
            prodDetail: []
        }
        this.getProduct();
    }
    getProduct = () => {
        console.log(this.state.id);
        let id = this.state.id;
        axios.get('http:localhost:3000/allProducts/' + id).then((response) => {
            console.log(response.data);
            this.setState({ prodDetail: response.data })
        }, (error) => {
            console.log(error.data);
        });
    }
    // handleDashboard = (event) => {
    //     console.log("Title-" + this.state.title)
    //     console.log("Cost-" + this.state.cost)
    //     event.preventDefault();
    // }
    onDelete = (event) => {
        event.preventDefault();
        this.props.deleteId(this.state.id);
        console.log(this.props.deleteId(this.state.id))
    }
    onEdit = (event) => {
        event.preventDefault();
        this.props.editId(this.state.id);
        console.log(this.props.editId(this.state.id))
    }

    render() {
        return (
            <div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card mb-4 border-dark" style={{ width: "17rem" }}>
                        <img src={this.state.imgurl} className="card-image-top" style={{ height: '10rem', width: '16.9rem' }} />
                        <div className="card-body">
                            <div className="card-title font-weight-bold">
                                <div className="d-flex">
                                    <div className="flex-shrink-1">
                                        {this.state.title}
                                        {/* {{ vehicle.name }} */}
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="text-danger font-weight-bold text-right">
                                            {this.state.cost}
                                            {/* &#8377;{{vehicle.rent | number}}/hr */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-subtitle mb-2 text-muted">
                                <div className="d-flex">
                                    <div className="flex-shrink-1">
                                        <i className="material-icons text-danger">analytics</i>
                                        {this.state.instock}
                                        {/* {{vehicle.model}} */}
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="text-dark font-weight-bold text-right">
                                            {this.state.description}
                                            {/* {{vehicle.number}} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-text mt-2">
                                <div className="card-subtitle mb-2 text-muted">
                                    <div className="d-flex">
                                        <div className="flex-shrink-1">
                                            <i className="material-icons text-danger">category</i>
                                            {this.state.category}
                                        </div>
                                    </div>
                                </div>
                                {/* <ul className="nav nav-tabs nav-fill nav-justified mb-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link bg-dark font-weight-bold text-light" data-toggle="pill"
                                        role="tab" >Book</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bg-light font-weight-bold text-danger"
                                        data-toggle="pill" href="#" role="tab" >Cancel</a>
                                </li>
                            </ul> */}

                                <ul className="nav nav-tabs nav-fill nav-justified mb-3" role="tablist">
                                    <li className="nav-item">
                                        <button className="btn btn-info mr-3 ml-3">
                                            <Link
                                                to={
                                                    {
                                                        pathname: '/edit',
                                                        state: this.state
                                                    }
                                                } style={{ textDecoration: "none",color:'white' }}>
                                                <i className="material-icons text-light font-weight-bold">create</i>
                                                 Edit</Link>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={this.onDelete} className="nav-link bg-light font-weight-bold text-danger"
                                            data-toggle="pill" role="tab" style={{ cursor: 'pointer' }} >
                                            <i className="material-icons text-danger">delete</i> Delete
                                                </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            //     {/* <span>
            // className="nav-link bg-dark font-weight-bold text-light" data-toggle="pill"
            //                                 role="tab"
            //      <form>
            //          <label><b>Product Name : </b></label>
            //          {this.state.title}
            //          <br />
            //          <br />
            //          <label><b>Cost : </b></label>
            //          {this.state.cost} 
            //          <br />
            //          <br />
            //          <label><b>In Stock : </b></label>
            //          {this.state.instock}
            //          <br />
            //          <br />
            //          <label><b>Description : </b></label>
            //          {this.state.description}
            //          <br />
            //          <br />
            //          <label><b>Category : </b></label>
            //          {this.state.category}
            //          <br />
            //          <br />
            //          <button onClick={this.handleDashboard}>Dashboard</button>
            //         <span style={{ float: 'left' }}><Link to={
            //             {
            //                 pathname: '/edit',
            //                 state: this.state
            //             }
            //         }>
            //             Edit</Link></span>
            //         <button onClick={this.onDelete}>Delete</button>
            //         <br />
            //         <br />
            //     </form>
            // </span> */}
        );
    }
}
export default Product;