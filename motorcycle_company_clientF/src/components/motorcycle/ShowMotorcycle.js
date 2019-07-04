import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


class ShowMotorcycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      motorcycles: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:58952/api/motorcycle/'+this.props.match.params.id)
      .then(res => {
        this.setState({ motorcycles: res.data });
        console.log(this.state.motorcycles);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:58952/api/motorcycle/'+id)
      .then((result) => {
        this.props.history.push("/motorcycleList")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center mb-5 mt-5">
              Motorcycle Details
            </h3>
          </div>
          <div class="panel-body">
            <h4>
              <Button variant="primary">
                <Link to="/motorcycleList" style={{color: '#FFF', textDecoration: 'none'}}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Motorcycle List</Link>
              </Button>
            </h4>
            <div class="card text-center mt-5">
              <div class="card-header">
                {this.state.motorcycles.brand}
              </div>
              <ul class="list-group ">
                <li class="list-group-item"><strong>Klasyfikacja</strong>: {this.state.motorcycles.classification}</li>
                <li class="list-group-item"><strong>Model</strong>: {this.state.motorcycles.model}</li>
                <li class="list-group-item"><strong>Moc</strong>: {this.state.motorcycles.power} </li>
                <li class="list-group-item"><strong>Waga</strong>: {this.state.motorcycles.weight}</li>
              </ul>
              <div class="card-body">
                <Link to={`/editMotorcycle/${this.state.motorcycles.id}`} class="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.motorcycles.id)} class="btn btn-danger">Delete</button>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMotorcycle;