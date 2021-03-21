import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import {flight_instructor_endorsements} from "../resources/Endorsements_Data";


class FlightInstructorAdditionalInfo extends Component{

    state = {
        A43_catClass: "",
        A44_practical: "",
        A45_practical:""
    }

    categoryClassChangeHandler = (event) =>{
        if( this.state.A43_catClass !== event.target.name){
            this.setState({A43_catClass: event.target.name});
            this.props.handleChange({target: {name: "A43_catClass", value: event.target.name}});
        }
    }
    practicalChangeHandler = (event) => {
        if( this.state.A44_practical !== event.target.name){
            this.setState({A44_practical: event.target.name});
            this.props.handleChange({target: {name: "A44_practical", value: event.target.name}});
        }
    }
    A45practicalChangeHandler = (event) => {
        if( this.state.A45_practical !== event.target.name){
            this.setState({A45_practical: event.target.name});
            this.props.handleChange({target: {name: "A45_practical", value: event.target.name}});
        }
    }


    render(){
        if(flight_instructor_endorsements.some(i => this.props.endorsements.includes(i.id))){
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Flight Instructor Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            {this.props.endorsements.includes("A43")&&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">CFI Category and Class: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="ASEL" type="radio" name="ASEL" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="ASEL"}/>
                                    <Form.Check inline label="AMEL" type="radio" name="AMEL" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="AMEL"}/>
                                    <Form.Check inline label="ASES" type="radio" name="ASES" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="ASES"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Helicopter"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Gyroplane"}/>
                                    <Form.Check inline label="Balloon" type="radio" name="Balloon" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Balloon"}/>
                                    <Form.Check inline label="Airship" type="radio" name="Airship" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Airship"}/>
                                    <Form.Check inline label="Glider" type="radio" name="Glider" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Glider"}/>
                                    <Form.Check inline label="Powered-Lift" type="radio" name="Powered-Lift" onChange={this.categoryClassChangeHandler} checked={this.state.A43_catClass==="Powered-Lift"}/>
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A44")&&
                            <Form.Group as={Row} inline controlId="classBCD">
                                <Form.Label column md={4}>[A44] CFI Category: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="Airplane" onChange={this.practicalChangeHandler} checked={this.state.A44_practical==="Airplane"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.practicalChangeHandler} checked={this.state.A44_practical==="Helicopter"}/>
                                    <Form.Check inline label="Powered-Lift" type="radio" name="Powered-Lift" onChange={this.practicalChangeHandler} checked={this.state.A44_practical==="Powered-Lift"}/>
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A45")&&
                            <Form.Group as={Row} inline controlId="classBCD">
                                <Form.Label column md={4}>[A45] Spin Category: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="an Airplane" onChange={this.A45practicalChangeHandler} checked={this.state.A45_practical==="an Airplane"}/>
                                    <Form.Check inline label="Glider" type="radio" name="a Glider" onChange={this.A45practicalChangeHandler} checked={this.state.A45_practical==="a Glider"}/>
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

export default FlightInstructorAdditionalInfo;