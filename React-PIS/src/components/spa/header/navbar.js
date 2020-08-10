import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser: [],
            isLoggedIn: this.props.isLoggedIn
        }
        // this.getAllUsers();
    }
    // getAllUsers = () => {
    //     axios.get('http://localhost:3000/login')
    //         .then((response) => {
    //             console.log(response.data);
    //             this.setState({ loginUser: response.data });
    //         }, (error) => {
    //             console.log(error.data);
    //         })
    // }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <b className="text-light mr-auto ml-2">BuyKart
                        <i className="material-icons mb-2 text-light" style={{ fontSize: '30px' }}>poll</i>
                    </b>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" >
                            <a className="nav-link">
                                <div className="btn-group">
                                    {!this.state.isLoggedIn &&
                                        <button type="button" className="btn btn-light font-weight-bold">
                                            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
                                        </button>}
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-light font-weight-bold">
                                        <Link to="/signup" style={{ color: 'black', textDecoration: 'none' }}>Signup</Link>
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <div className="btn-group">
                                    {this.state.isLoggedIn &&
                                        <button type="button" className="btn btn-light font-weight-bold">
                                            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Logout</Link>
                                        </button>}
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-light font-weight-bold">
                                        <Link to="/dashboard" style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Link>
                                    </button>
                                </div>
                            </a>
                        </li>
                        {/* <li className="nav-item" >
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger">
                                        <i className="material-icons">account_box</i>
                                        <span className="font-weight-bold">{{}}</span>
                                    </button>
                                </div>
                            </a>
                        </li> */}
                        {/*
                        <li className="nav-item">
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger font-weight-bold">
                                        Vehicles
                        </button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger font-weight-bold">
                                        My Booking
                            </button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger font-weight-bold">
                                        Requests
                        </button>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;