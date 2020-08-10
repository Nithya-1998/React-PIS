import React from 'react';
import './productstyle.css';
import axios from 'axios';
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cost: '',
            inStock: 0,
            description: '',
            category: ''
        }
    }
    onSave = (event) => {
        event.preventDefault();
        console.log("Product Added Successfully...");
        let addedProd = {
            "title": this.state.title,
            "cost": this.state.cost,
            "inStock": this.state.inStock,
            "description": this.state.description,
            "category": this.state.category,
            "imgurl":this.state.imgurl
        }
        axios.post('http://localhost:3000/allProducts', addedProd).then(response => {
            console.log(response);
            this.props.history.push('/products')
        }, error => {
            console.error(error);
        })
    }
    handleStock = (event) => {
        event.preventDefault();
        this.setState({ inStock: event.target.value })
    }
    handleTitleChange = (event) => {
        event.preventDefault();
        this.setState({ title: event.target.value })
    }
    handleCostChange = (event) => {
        event.preventDefault();
        this.setState({ cost: event.target.value })
    }
    handleDescription = (event) => {
        event.preventDefault();
        this.setState({ description: event.target.value })
    }
    handleCategory = (event) => {
        event.preventDefault();
        this.setState({ category: event.target.value })
    }
    handleUrl = (event) => {
        event.preventDefault();
        this.setState({ imgurl: event.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-lg-7">
                                <div className="card mt-4 mb-5">
                                    <div className="card-title h1 ml-4 mt-4">Add Details</div>
                                    <div className="mt-2 ml-4 mr-4">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Product Name : </b></label>
                                            <input type="text" id="productName" className="title" value={this.state.title} onChange={this.handleTitleChange}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Cost : </b></label>
                                            <input type="text" id="productcost" className="cost" value={this.state.cost} onChange={this.handleCostChange}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Product ImageUrl : </b></label>
                                            <input type="text" id="imgUrl" className="imgUrl" value={this.state.imgurl} onChange={this.handleUrl}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>In Stock : </b></label>
                                            <input type="number" id="productcost" className="instock" value={this.state.instock} onChange={this.handleStock}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Description : </b></label>
                                            <input type="text" id="productdescription" className="productdescription" value={this.state.description} onChange={this.handleDescription}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Category : </b></label>
                                            <input type="text" id="category" className="category" value={this.state.category} onChange={this.handleCategory}></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="btn-group mb-4 mt-4">
                                                <button type="button" onClick={this.onSave} className="btn btn-success font-weight-bold">
                                                    Save Changes
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            // <div>
            //     <form>
            //         <div className="form-width">
            //             <h1>Add Product</h1>
            //             <label><b>Product Name : </b></label>
            //             <input type="text" id="productName" className="title" value={this.state.title} onChange={this.handleTitleChange}></input>
            //             <br />
            //             <br />
            //             <label><b>Cost : </b></label>
            //             <input type="text" id="productcost" className="cost" value={this.state.cost} onChange={this.handleCostChange}></input>
            //             <br />
            //             <br />
            //             <label><b>In Stock : </b></label>
            //             <input type="number" id="productstock" className="instock" value={this.state.inStock} onChange={this.handleStock}></input>
            //             <br />
            //             <br />
            //             <label><b>Description : </b></label>
            //             <input type="text" id="productdescription" className="productdescription" value={this.state.description} onChange={this.handleDescriptionChange}></input>
            //             <br />
            //             <br />
            //             <label><b>Category : </b></label>
            //             <input type="text" id="category" className="category" value={this.state.category} onChange={this.handleCategory}></input>
            //             <br />
            //             <br />
            //             <button onClick={this.onSave}>Save</button>
            //         </div>
            //     </form>
            // </div>
        );
    }
}

export default AddProduct;