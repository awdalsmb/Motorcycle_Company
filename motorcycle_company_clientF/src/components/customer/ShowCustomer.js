import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class ShowCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/customer/' + this.props.match.params.id)
      .then(res => {
        this.setState({ customers: res.data });
        console.log(this.state.customers);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('http://localhost:58952/api/customer/' + id)
      .then((result) => {
        this.props.history.push("/customerList")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center mb-5 mt-5">
              Customer Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Button variant="primary"><Link to="/customerList" style={{ color: '#FFF', textDecoration: 'none' }}><span class="glyphicon glyphicon-th-list" aria-hidden="true" ></span> Customer List</Link></Button></h4>
            <div class="card text-center mt-5">
              <div class="card-header">
                Klient
              </div>
              <ul class="list-group ">
                <li class="list-group-item"><strong>Imię</strong>: {this.state.customers.firstName}</li>
                <li class="list-group-item"><strong>Nazwisko</strong>: {this.state.customers.lastName}</li>
                <li class="list-group-item"><strong>Płeć</strong>: {this.state.customers.gender} </li>
              </ul>
              <div class="card-body">
                <Link to={'/editCustomer/${this.state.customers.id}'} class="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.customers.id)} class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCustomer;
