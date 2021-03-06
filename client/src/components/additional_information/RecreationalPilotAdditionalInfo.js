import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    aircraft_make_and_model,
    recreational_pilot_endorsements,
} from "../resources/Endorsements_Data";
import { Row, Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from "moment";


class RecreationalPilotAdditionalInfo extends Component{

    state = {
        knowledgeSelected: "",
        date: null,
        leaveBlank: false
    }

    knowledgeChangeHandler = (event) => {
        if( this.state.knowledgeSelected !== event.target.name){
            this.setState({knowledgeSelected: event.target.name});
            this.props.handleChange({target: {name: "recreational_knowledge_test", value: event.target.name}});
        }
    }

    DateChangeHandler = (date) =>{
        this.setState({date: date});
        this.props.handleChange({target: {name:"A30_date", value: moment(date).format("MM/DD/YYYY")}});
    }

    /*Updates the "leave blank" button. When selected it should disable the date selection and push the default value
    * to App.js*/
    leaveBlankHandler = () =>{
        if(!this.state.leaveBlank) { //Going from not clicked to clicked (User wants to disable date selection)
            this.props.handleChange({target: {name: "A30_date", value:"________________________"}});
            this.setState(prevState => ({date: null, leaveBlank: !prevState.leaveBlank}));
        }
        else //Enable date selection. Only needs to make the date button clickable.
            this.setState(prevState => ({leaveBlank: !prevState.leaveBlank}));
    }

    render(){
        if(recreational_pilot_endorsements.some(i => this.props.endorsements.includes(i.id))){
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Recreational Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            {this.props.endorsements.includes("A25") &&
                            <Form.Group as={Row} controlId="recreational_knowledge_test">
                                <Form.Label column md="5">Airman knowledge test: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="Airplane" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Airplane"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Helicopter"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Gyroplane"}/>
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.includes("A27")&&
                            <Form.Group as={Row} inline controlId="xcLessThan50">
                                <Form.Label column md={4}>[A27] Airport for flights less than 50 NM: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A27_airport"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'KAIO'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.some(i => aircraft_make_and_model.includes(i)) &&
                            <Form.Group as={Row} inline controlId="sportPractical">
                                <Form.Label column md={4}>Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="recreational_makeModel"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.includes("A30") &&
                            <Form.Group as={Row} inline controlId="soloXCDate">
                                <Form.Label column md={4}>[A30] Solo flight date: </Form.Label>
                                <Col md={6}>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={date => this.DateChangeHandler(date)}
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </Col>
                                <Col md={2}>
                                    <Form.Check name="leaveBlank" label="Leave Blank" className="pr-5" onChange={this.leaveBlankHandler} checked={this.state.leaveBlank}/>
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.includes("A30")&&
                            <Form.Group as={Row} inline controlId="XCLimitations">
                                <Form.Label column md={4}>[A30] Limitations : </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A30_limitations"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g., flight which requires communication with air traffic control, flight in
                                         an aircraft for which the pilot does not hold a category/class rating, etc."
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }
                        </Form>
                    </Row>
                </>
            )
        }
        else{
            return null;
        }
    }
}

export default RecreationalPilotAdditionalInfo;