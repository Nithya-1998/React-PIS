import React from 'react';
import './signup.css'
import axios from 'axios';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            confirmPassword: '',
            checkStatus: false,
            userCheck: [],
            errorMsg: '',
            isExist: true,
            existMsg: '',
            pwdCheck: false,
            pwdMsg: '',
            buttonStatus: false
        }
        this.getAllUsers();
    }
    getAllUsers = () => {
        axios.get('http://localhost:3000/login')
            .then((response) => {
                console.log(response.data);
                this.setState({ userCheck: response.data });
                console.log(this.state.userCheck);
            }, (error) => {
                console.log(error.data);
            })
    }
    handleEmailChange = (event) => {
        this.setState({ emailId: event.target.value })
    }
    handlePwdChange = (event) => {
        this.setState({ password: event.target.value })
    }
    handleConfirmPwdChange = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }
    userExist() {
        let status=false
        if (this.state.password === this.state.confirmPassword) {
            status=true
            this.setState({ buttonStatus: true })
        }
        var oldUser = this.state.userCheck.filter((user) => {
            return (user.emailId === this.state.emailId);
        })
        console.log(oldUser)
        let newUser = {
            "emailId": this.state.emailId,
            "password": this.state.password
        }
        console.log(newUser);
        console.log(status)
        if (oldUser.length === 0) {
            this.setState({ checkStatus: false });
            axios.post('http://localhost:3000/login', newUser).then(
                (response) => {
                    console.log(response.data)
                    this.intervaltime()
                    this.props.history.push('/login');
                }, (error) => {
                    console.log(error.data)
                }
            );
        }
        else {
            this.setState({ errorMsg: "UserId Already Exist", checkStatus: true })
            console.log("User Already Exist");
        }
    }
    intervaltime = () => {
        setTimeout(() => {
            this.setState({ checkStatus: false })
        }, 3000)
    }
    checkStatus = () => {
        if (this.state.password === this.state.confirmPassword) {
            this.setState({ pwdCheck: false })
        } else {
            this.setState({ pwdCheck: true, pwdMsg: "Password Does Not Match" })
        }
        this.userExist();
    }
    intervaltimestatus=()=>{
        setTimeout(() => {
            this.setState({ pwdCheck: false })
        }, 3000)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.checkStatus();
        console.log(this.state.errorMsg + this.state.checkStatus);
        this.intervaltime();
        this.intervaltimestatus();
        this.checkStatus();
    }

    render() {
        return (
            <div>
                <form>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-lg-7">
                                <div className="card mt-4 mb-5">
                                    <div className="card-title h1 ml-4 mt-4">SignUp</div>
                                    {this.state.pwdCheck &&
                                        <div className="alert alert-danger mt-2  ml-4 mr-4" role="alert">
                                            {this.state.pwdMsg}
                                        </div>}
                                    {this.state.checkStatus &&
                                        <div className="alert alert-danger mt-2  ml-4 mr-4" role="alert">
                                            {this.state.errorMsg}
                                        </div>}
                                    <div className="mt-2 ml-4 mr-4">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label for="emailId"><b>Email Id : </b></label>
                                            <input type="text" id="emailId" className="emailId" value={this.state.emailId} onChange={this.handleEmailChange} placeholder="Enter Email-id.." required ></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label for="password"><b>Password : </b></label>
                                            <input type="password" id="password" className="password" value={this.state.password} onChange={this.handlePwdChange}
                                                placeholder="Enter Password" required />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <label><b>Confirm Password : </b></label>
                                            <input type="password" id="confirmPwd" className="password" value={this.state.confirmPassword}
                                                onChange={this.handleConfirmPwdChange} placeholder="Confirm Password" required ></input>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="btn-group mb-4 mt-4">
                                                <button type="button" onClick={this.handleSubmit} className="btn btn-success font-weight-bold">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default Signup;