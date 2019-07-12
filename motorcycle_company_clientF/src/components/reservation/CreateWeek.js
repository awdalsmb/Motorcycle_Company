import React, { Component } from 'react';
import axios from 'axios';
import '../../Reservation.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

class CreateWeek extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            mon: {},
            tue: {},
            wed: {},
            thu: {},
            fri: {}
        }
    }


    componentDidMount()
    {
        this.Check("Monday");
        this.Check("Tuesday");
        this.Check("Wednesday");
        this.Check("Thursday");
        this.Check("Friday");
    }

    Check(day)
    {
        axios.get("http://localhost:58952/api/Rez/Day/" + day)
        .then(res => {
            if(day === 'Monday')
            {
                this.setState({
                    mon: res.data
                })
            }
            if(day === 'Tuesday')
            {
                this.setState({
                    tue: res.data
                })
            }
            if(day === 'Wednesday')
            {
                this.setState({
                    wed: res.data
                })
            }
            if(day === 'Thursday')
            {
                this.setState({
                    thu: res.data
                })
            }
            if(day === 'Friday')
            {
                this.setState({
                    fri: res.data
                })
            }
        })
        .catch(err => {
            this.Add(day);
        })
    }

    Add(day) {
        axios.post("http://localhost:58952/api/Rez/Create", {
            day: day
        })
    }

    render() {
        return (
            <div class="App">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title text-center mb-5 mt-5">
                            Reservation
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4 class="mb-4">
                            <Button variant="primary">
                                <Link to="/addReservation" style={{color: '#FFF', textDecoration: 'none'}}>
                                <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> 
                                Add Reservation
                                </Link>
                            </Button>
                        </h4>
                        <table className="table">
                            <tr>
                                <th className="w2"></th> <th className="w">Monday</th> <th className="w">Tuesday</th> <th className="w">Wednesday</th> <th className="w">Thursday</th> <th className="w">Friday</th>
                            </tr>
                            <tr>
                                <th>8:00</th> 
                                <td>{this.state.mon.g8 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/8`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g8 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/8`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g8 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/8`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g8 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/8`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g8 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/8`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>9:00</th> 
                                <td>{this.state.mon.g9 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/9`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g9 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/9`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g9 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/9`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g9 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/9`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g9 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/9`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>10:00</th> 
                                <td>{this.state.mon.g10 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/10`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g10 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/10`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g10 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/10`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g10 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/10`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g10 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/10`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>11:00</th> 
                                <td>{this.state.mon.g11 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/11`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g11 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/11`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g11 === 0 ? <div class="alert alert-primary" role="alert">Free</div> :<Link to={`/inneReservation/${this.state.wed.id}/11`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g11 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/11`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g11 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/11`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>12:00</th> 
                                <td>{this.state.mon.g12 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/12`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g12 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/12`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g12 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/12`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g12 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/12`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g12 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/12`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>13:00</th> 
                                <td>{this.state.mon.g13 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/13`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g13 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/13`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g13 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/13`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g13 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/13`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g13 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/13`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>14:00</th> 
                                <td>{this.state.mon.g14 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/14`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g14 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/14`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g14 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/14`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g14 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/14`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g14 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/14`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>15:00</th> 
                                <td>{this.state.mon.g15 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/15`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g15 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/15`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g15 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/15`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g15 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/15`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g15 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/15`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                            <tr>
                                <th>16:00</th> 
                                <td>{this.state.mon.g16 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.mon.id}/16`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td> 
                                <td>{this.state.tue.g16 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.tue.id}/16`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.wed.g16 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.wed.id}/16`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.thu.g16 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.thu.id}/16`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                                <td>{this.state.fri.g16 === 0 ? <div class="alert alert-primary" role="alert">Free</div> : <Link to={`/inneReservation/${this.state.fri.id}/16`}><div class="alert alert-danger" role="alert">Reserved</div></Link>}</td>
                            </tr>
                        </table>
                        <br /><Button variant="secondary"><Link to="/" style={{color: '#FFF', textDecoration: 'none'}}>Home</Link></Button><br /><br /><br />
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateWeek;
