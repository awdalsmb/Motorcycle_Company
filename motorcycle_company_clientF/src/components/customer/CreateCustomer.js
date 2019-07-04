import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";


class CreateCustomer extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, gender } = this.state;

        axios.post('http://localhost:58952/api/customer', { firstName, lastName, gender })
            .then((result) => {
                this.props.history.push("/customerList")
            });
    }

    render() {
        const { firstName, lastName, gender } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading mt-5">
                        <h3 class="panel-title text-center mb-5">
                            ADD Customer
                        </h3>
                    </div>
                    <div class="panel-body mb-4 ">
                        <h4><Button variant="primary"><Link to="/customerList" style={{color: '#FFF', textDecoration: 'none'}}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Customer List</Link></Button></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="brand">First Name:</label>
                                <input required pattern="[a-zA-Z]+" type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <label for="power">Last Name:</label>
                                <input required pattern="[a-zA-Z]+" type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
                            </div>
                            <div class="form-group">
                                <label for="classification">Gender:</label>
                                <select className="form-control" name="gender" value={gender} onChange={this.onChange} placeholder="Gender" >
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </div>
                            <Button type="submit" variant="success">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCustomer;