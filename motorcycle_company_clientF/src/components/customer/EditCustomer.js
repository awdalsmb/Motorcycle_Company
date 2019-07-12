import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class EditCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/customer/'+this.props.match.params.id)
      .then(res => {
        this.setState({ customer: res.data });
        console.log(this.state.customer);
      });
  }

  onChange = (e) => {
    const state = this.state.customer
    state[e.target.name] = e.target.value;
    this.setState({customer:state});
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:58952/api/customer/'+id)
      .then((result) => {
      });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, gender} = this.state.customer;

    this.delete(this.props.match.params.id);

    axios.post('http://localhost:58952/api/customer',{firstName, lastName, gender})
      .then((result) => {
        this.props.history.push("/customerList")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title mb-5 mt-5">
              EDIT Customer
            </h3>
          </div>
          <div class="panel-body">
          <h4><Button variant="primary"><Link to="/motorcycleList" style={{color: '#FFF', textDecoration: 'none'}}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Customer List</Link></Button></h4>
          <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" class="form-control" name="firstName" value={this.state.customer.firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" class="form-control" name="lastName" value={this.state.customer.lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" class="form-control" name="gender" value={this.state.customer.gender} onChange={this.onChange} placeholder="Gender" />
              </div>
              <Button type="submit" variant="success">Update</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCustomer;