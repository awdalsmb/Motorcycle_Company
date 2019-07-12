import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


class EditMotorcycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      motorcycle: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/motorcycle/'+this.props.match.params.id)
      .then(res => {
        this.setState({ motorcycle: res.data });
        console.log(this.state.motorcycle);
      });
  }

  onChange = (e) => {
    const state = this.state.motorcycle
    state[e.target.name] = e.target.value;
    this.setState({motorcycle:state});
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:58952/api/motorcycle/' + id)
      .then((result) => {
      });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { brand, classification, model, power, weight} = this.state.motorcycle;

    this.delete(this.props.match.params.id);

    axios.post('http://localhost:58952/api/motorcycle',{brand, classification, model, power, weight})
      .then((result) => {
        this.props.history.push("/motorcycleList")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title mb-5 mt-5">
              EDIT Motorcycle
            </h3>
          </div>
          <div class="panel-body">
          <h4><Button variant="primary"><Link to="/motorcycleList" style={{color: '#FFF', textDecoration: 'none'}}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Motorcycle List</Link></Button></h4>
          <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Brand:</label>
                <input type="text" class="form-control" name="brand" value={this.state.motorcycle.brand} onChange={this.onChange} placeholder="Brand" />
              </div>
              <div class="form-group">
                <label for="title">Classification:</label>
                <input type="text" class="form-control" name="classification" value={this.state.motorcycle.classification} onChange={this.onChange} placeholder="Classification" />
              </div>
              <div class="form-group">
                <label for="author">Model:</label>
                <input type="text" class="form-control" name="model" value={this.state.motorcycle.model} onChange={this.onChange} placeholder="Model" />
              </div>
              <div class="form-group">
                <label for="published_date">Power:</label>
                <input type="text" class="form-control" name="power" value={this.state.motorcycle.power} onChange={this.onChange} placeholder="Power" />
              </div>
              <div class="form-group">
              <label for="published_date">Weight:</label>
              <input type="text" class="form-control" name="weight" value={this.state.motorcycle.weight} onChange={this.onChange} placeholder="Weight" />
            </div>
            <Button variant="success" type="submit" >Update</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMotorcycle;