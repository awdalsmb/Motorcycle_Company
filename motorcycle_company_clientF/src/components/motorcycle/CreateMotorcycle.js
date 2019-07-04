import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Button } from 'react-bootstrap';



class CreateMotorcycle extends Component {

  constructor() {
    super();
    this.state = {
      brand: '',
      classification: '',
      model: '',
      power: '',
      weight: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { brand, classification, model, power, weight } = this.state;

    axios.post('http://localhost:58952/api/motorcycle', { brand, classification, model, power, weight })
      .then((result) => {
        this.props.history.push("/motorcycleList")
      });
  }

  render() {
    const { brand, classification, model, power, weight } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center mb-5 mt-5">
              ADD Motorcycle
            </h3>
          </div>
          <div class="panel-body ">
            <h4><Button variant="primary"><Link to="/motorcycleList" style={{color: '#FFF', textDecoration: 'none'}}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Motorcycle List</Link></Button></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="brand">Brand:</label>
                <input required pattern="[a-zA-Z]+" type="text" class="form-control" name="brand" value={brand} onChange={this.onChange} placeholder="Brand" />
              </div>
              <div class="form-group">
                <label for="classification">Classification type:</label>
                <select className="form-control" name="classification" value={classification} onChange={this.onChange} placeholder="Classification" >
                <option>Supersport</option>
                <option>Cross</option>
                <option>Custom</option>
              </select>             
               </div>
              <div class="form-group">
                <label for="model">Model:</label>
                <input required pattern="[a-zA-Z0-9]+" type="text" class="form-control" name="model" value={model} onChange={this.onChange} placeholder="Model" />
              </div>
              <div class="form-group">
                <label for="power">Power:</label>
                <input required pattern="[0-9]+"type="text" class="form-control" name="power" value={power} onChange={this.onChange} placeholder="Power" />
              </div>
              <div class="form-group">
                <label for="weight">Weight:</label>
                <input required pattern="[0-9]+" type="text" class="form-control" name="weight" value={weight} onChange={this.onChange} placeholder="Weight" />
              </div>
              <Button type="submit" variant="success">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMotorcycle;