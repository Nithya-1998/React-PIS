import React from 'react';
import Product from './product';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
class AllProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allProducts: [],
            id: 0,
            editid: 0,
            searchValue: '',
            isTitleSearch: true,
            isCategorySearch: false,
            toggleName: true
            // deleteSuccess:true
        }
        this.getAllProducts();
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/allProducts').then((response) => {
            console.log(response.data);
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

    intializeState = () => {
        setTimeout(() => {
            this.setState({ deleteSuccess: false })
        }, 2000)
    }
    deleteProductWithId = (id) => {
        console.log("Deleted Successfully" + id);
        axios.delete('http://localhost:3000/allProducts/' + id).then((response) => {
            console.log(response.data);
            this.setState({ prodDetail: response.data });
            this.getAllProducts();
            // this.intializeState();
        }, (error) => {
            console.log(error.data);
        });
    }
    renderAllProducts = () => {
        return this.state.allProducts.map(product => {
            return (
                <div>
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        cost={product.cost}
                        instock={product.inStock}
                        category={product.category}
                        description={product.description}
                        imgurl={product.imgurl}
                        editId={this.editProdutWithId}
                        deleteId={this.deleteProductWithId}
                    >
                    </Product>
                </div>
            )
        })
    }
    handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        let val = event.target.value;
        this.setState({ searchValue: val });
        if (val === '' || val.length === 0) {
            this.getAllProducts();
        }
        if (this.state.isCategorySearch) {
            let searchProd = this.state.allProducts.filter((prod) => {
                return prod.category.toLowerCase().match(val.toLowerCase());
            });
            console.log(searchProd);
            this.setState({ allProducts: searchProd });
        } else {
            let searchProd = this.state.allProducts.filter((prod) => {
                return prod.title.toLowerCase().match(val.toLowerCase());
            });
            console.log(searchProd);
            this.setState({ allProducts: searchProd });
        }
    }
    handleCategory = (event) => {
        event.preventDefault();
        this.setState({ isCategorySearch: true, isTitleSearch: false })
    }
    handleTitle = (event) => {
        event.preventDefault();
        this.setState({ isTitleSearch: true, isCategorySearch: false })
    }
    sortName = (event) => {
        event.preventDefault();
        console.log(event);
        if (event.target.value) {
            let sorttitle = this.state.allProducts.sort((a, b) => {
                return (a.title - b.title);
            })
            console.log(sorttitle.sort((a, b) => { return (a.title - b.title); }));
            this.setState({ allProducts: sorttitle })
        }
    }
    sortPrice = (event) => {
        event.preventDefault();
        let sortprice = this.state.allProducts.sort((a, b) => {
            return (a.cost - b.cost);
        })
        console.log(sortprice.cost);
        this.setState({ allProducts: sortprice })
    }
    handlePrice1 = (event) => {
        event.preventDefault();
        console.log(event.target.value);

    }
    handlePrice2 = (event) => {
        event.preventDefault();

    }
    handlePrice3 = (event) => {
        event.preventDefault();

    }
    handlePrice4 = (event) => {
        event.preventDefault();

    }
    handlePrice5 = (event) => {
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                        <h1 className="display-4 text-dark">Find Product</h1>
                        <div className="input-group">
                            <div className="input-group-prepend mb-5">
                                <span className="input-group-text" id="search"><i className="material-icons">search</i></span>
                            </div>
                            <input type="text" onChange={this.handleSearch} className="form-control" placeholder="Search Product here..." />
                            <a >
                                <button type="button" className="btn btn-secondary">
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
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbardropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  navbar-light navbar-light" id="navbardropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <div className="d-flex">
                                    <div className="flex-shrink-1">
                                        <a className="nav-link bg-dark text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                            data-toggle="dropdown">
                                            <i className="material-icons">sort</i>
                                            Sort
                                        </a>
                                        <div className="dropdown-menu">
                                            <button value={this.state.toggleName} onClick={this.sortName} className="dropdown-item">Name</button>
                                            <button onClick={this.sortPrice} className="dropdown-item">Price</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="d-flex">
                                    <div className="flex-shrink-1">
                                        <a className="nav-link bg-light text-dark dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="material-icons">filter_list</i>
                                              Filter
                                         </a>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-item bg-dark text-light" data-target="#cost">
                                                Cost
                                            </div>
                                            <button onClick={this.handlePrice1} className="dropdown-item"> Below 1000</button>
                                            <button onClick={this.handlePrice2} className="dropdown-item"> 1000-10000</button>
                                            <button onClick={this.handlePrice3} className="dropdown-item">10000-50000</button>
                                            <button onClick={this.handlePrice4} className="dropdown-item">100000-500000</button>
                                            <button onClick={this.handlePrice5} className="dropdown-item"> Above 500000</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button className="dropdown-item" onClick={this.handleCategory}>
                            <i className="material-icons">search</i>By Category</button>
                        <button className="dropdown-item" onClick={this.handleTitle}>
                            <i className="material-icons">search</i>By Title</button>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-6 col-lg-3"> */}
                        {this.renderAllProducts()}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            // <div>
            //     <div classNameName="pad-top">
            //         <Link to={
            //             {
            //                 pathname: '/add',
            //                 state: this.state
            //             }
            //         }>
            //             Add Product</Link>
            //         <div>
            //             <input type="text" placeholder="Search for Products" onChange={this.handleSearch} />
            //             <button>
            //             <i classNameName="material-icons icon">search</i>
            //             </button>
            //             <input type="submit" value="Search" />
            //             <button onClick={this.handleCategory}>Category</button>
            //             <button onClick={this.handleTitle}>Title</button>
            //             <h2>All Products</h2>
            //             <div>
            //                 {this.renderAllProducts()}
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default withRouter(AllProduct);