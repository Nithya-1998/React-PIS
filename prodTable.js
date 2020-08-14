import React from 'react';
import axios from 'axios';
// import Product from './product';
import { Link } from 'react-router-dom';
import ProductInfo from './product-info';
import './productstyle.css';
class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProducts: [],
            id: 0,
            editid: 0,
            searchValue: '',
            isTitleSearch: true,
            isCategorySearch: false,
            toggleName: true,
        }
        this.getAllProducts();
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/allProducts').then((response) => {
            console.log(response.data);
            let tit = [];
            let instk = [];
            for (let obj of response.data) {
                tit.push(obj.title);
                instk.push(obj.inStock);
            }
            this.setState({ allProducts: response.data })
            console.log(this.state.allProducts)
        }, (error) => {
            console.log(error.data);
        })
    }
    editProdutWithId = (id) => {
        this.setState({ editid: id })
        console.log('Edit Product with id: ' + id);
        this.props.history.push({
            pathname: '/edit',
            state: { editid: id }
        })
    }
    deleteProductWithId = (id) => {
        console.log("Deleted Successfully" + id);
        axios.delete('http://localhost:3000/allProducts/' + id).then((response) => {
            console.log(response.data);
            this.setState({ prodDetail: response.data });
            this.getAllProducts();
        }, (error) => {
            console.log(error.data);
        });
    }
    renderAllProducts = () => {
        return this.state.allProducts.map(product => {
            return (
                <div>
                    <ProductInfo
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        cost={product.cost}
                        instock={product.inStock}
                        category={product.category}
                        description={product.description}
                        imgurl={product.imgurl}
                        outOfstock={product.outOfstock}
                        quantity={product.quantity}
                        editId={this.editProdutWithId}
                        deleteId={this.deleteProductWithId}
                    >
                    </ProductInfo>
                </div>
            )
        })
    }
    handleCategorySearch = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        let val = event.target.value;
        this.setState({ searchValue: val });
        if (val === '' || val.length === 0) {
            this.getAllProducts();
        }
        let searchProd = this.state.allProducts.filter((prod) => {
            return prod.category.toLowerCase().match(val.toLowerCase());
        });
        console.log(searchProd);
        this.setState({ allProducts: searchProd });
    }
    handleTitleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        let val = event.target.value;
        this.setState({ searchValue: val });
        if (val === '' || val.length === 0) {
            this.getAllProducts();
        }
        let searchProd = this.state.allProducts.filter((prod) => {
            return prod.title.toLowerCase().match(val.toLowerCase());
        });
        console.log(searchProd);
        this.setState({ allProducts: searchProd });
    }
    render() {
        return (
            <div>
                <span className="input-group-text" id="search"><i className="material-icons">search</i>
                    <input type="text" className="dropdown-item" onChange={this.handleTitleSearch} placeholder="Search Title here..." />
                    <i className="material-icons">search</i>
                    <input type="text" className="dropdown-item" onChange={this.handleCategorySearch} placeholder="Search Category here..." />
                    <a >
                        <button type="button" className="btn btn-dark mr-4 ml-4">
                            <Link to={
                                {
                                    pathname: '/add',
                                    state: this.state
                                }
                            } style={{ textDecoration: "none" }}>
                                <i className="material-icons text-light font-weight-bold">add</i>
                                <span className="text-light font-weight-bold"> Add Product</span></Link>
                        </button>
                    </a>
                </span>
                <div>
                    <div className="table-responsive">
                        <table className="table table-striped table-fixed w-auto table-dark">
                            <tbody>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">In Stock</th>
                                        <th scope="col">Out of Stock</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                            </tbody>
                            <tbody>
                                {this.renderAllProducts()}
                            </tbody>
                            <tbody>
                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Cost</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>In Stock</th>
                                        <th>Out of Stock</th>
                                        <th>Quantity</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </tfoot>
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
        );
    }
}

export default ProductTable;