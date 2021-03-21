import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import { sport_flight_instructor_endorsements} from "../resources/Endorsements_Data";


class SportFlightInstructorAdditionalInfo extends Component{

    state = {
        sport_CFI_catClass: "",
        A48_class: "",
    }

    categoryClassChangeHandler = (event) =>{
        if( this.state.sport_CFI_catClass !== event.target.name){
            this.setState({sport_CFI_catClass: event.target.name});
            this.props.handleChange({target: {name: "sport_CFI_catClass", value: event.target.name}});
        }
    }
    classChangeHandler = (event) => {
        if( this.state.A48_class !== event.target.name){
            this.setState({A48_class: event.target.name});
            this.props.handleChange({target: {name: "A48_class", value: event.target.name}});
        }
    }


    render(){
        if(sport_flight_instructor_endorsements.some(i => this.props.endorsements.includes(i.id))){
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Sport Flight Instructor Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            {this.props.endorsements.includes("A48")&&
                            <Form.Group as={Row} inline controlId="classBCD">
                                <Form.Label column md={4}>Aircraft Class: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="Airplane" onChange={this.classChangeHandler} checked={this.state.A48_class==="Airplane"}/>
                                    <Form.Check inline label="Glider" type="radio" name="Glider" onChange={this.classChangeHandler} checked={this.state.A48_class==="Glider"}/>
                                    <Form.Check inline label="Balloon" type="radio" name="Balloon" onChange={this.classChangeHandler} checked={this.state.A48_class==="Balloon"}/>
                                    <Form.Check inline label="Airship" type="radio" name="Airship" onChange={this.classChangeHandler} checked={this.state.A48_class==="Airship"}/>
                                    <Form.Check inline label="Powered-Parachute" type="radio" name="Powered-Parachute" onChange={this.classChangeHandler} checked={this.state.A48_class==="Powered-Parachute"}/>
                                    <Form.Check inline label="Weight-Shift-Control" type="radio" name="Weight-Shift-Control" onChange={this.classChangeHandler} checked={this.state.A48_class==="Weight-Shift-Control"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.classChangeHandler} checked={this.state.A48_class==="Gyroplane"}/>
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.some(i => i !== "A43" && this.props.endorsements.includes(i))&&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Category and Class: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="ASEL" type="radio" name="ASEL" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="ASEL"}/>
                                    <Form.Check inline label="AMEL" type="radio" name="AMEL" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="AMEL"}/>
                                    <Form.Check inline label="ASES" type="radio" name="ASES" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="ASES"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Helicopter"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Gyroplane"}/>
                                    <Form.Check inline label="Balloon" type="radio" name="Balloon" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Balloon"}/>
                                    <Form.Check inline label="Airship" type="radio" name="Airship" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Airship"}/>
                                    <Form.Check inline label="Glider" type="radio" name="Glider" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Glider"}/>
                                    <Form.Check inline label="Powered-Lift" type="radio" name="Powered-Lift" onChange={this.categoryClassChangeHandler} checked={this.state.sport_CFI_catClass==="Powered-Lift"}/>
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

export default SportFlightInstructorAdditionalInfo;