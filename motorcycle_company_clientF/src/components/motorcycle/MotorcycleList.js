import React, { Component } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class MotorcycleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      motorcycles: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/motorcycle')
    .then(res => {
      this.setState({motorcycles: res.data});
      console.log(this.state.motorcycles);
    })
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center mb-5 mt-5">
              Motorcycle List
            </h3>
          </div>
          <div class="panel-body">
            <h4 class="mb-4">
              <Button variant="primary">
                <Link to="/createMotorcycle" style={{color: '#FFF', textDecoration: 'none'}}>
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 
                  Add Motorcycle
                </Link>
              </Button>
            </h4>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Classification</th>
                  <th>Model</th>
                  <th>Power</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {this.state.motorcycles.map(m =>
                  <tr>
                    <td><Link to={`/showMotorcycle/${m.id}`}>{m.brand}</Link></td>
                    <td>{m.classification}</td>
                    <td>{m.model}</td>
                    <td>{m.power}</td>
                    <td>{m.weight}</td>
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

export default MotorcycleList;
