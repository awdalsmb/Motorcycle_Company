import React, { Component } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class CustomerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/customer')
    .then(res => {
      this.setState({customers: res.data});
      console.log(this.state.customers);
    })
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center mb-5 mt-5">
              Customers List
            </h3>
          </div>
          <div class="panel-body">
            <h4 class="mb-4">
              <Button variant="primary">
                <Link to="/createCustomer" style={{color: '#FFF', textDecoration: 'none'}}>
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 
                  Add Customer
                </Link>
              </Button>
            </h4>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {this.state.customers.map(c =>
                  <tr>
                    <td><Link to={`/showCustomer/${c.id}`}>{c.firstName}</Link></td>
                    <td>{c.lastName}</td>
                    <td>{c.gender}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Button variant="secondary"><Link to="/" style={{color: '#FFF', textDecoration: 'none'}}>Home</Link></Button>
      </div>
    );
  }
}

export default CustomerList;
