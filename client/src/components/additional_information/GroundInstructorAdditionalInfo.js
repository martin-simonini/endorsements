import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';


class GroundInstructorAdditionalInfo extends Component{

    state = {
        typeSelected: ""
    }

    eventHandler = (event) => {
        if( this.state.typeSelected !== event.target.name){
            this.setState({typeSelected: event.target.name});
            this.props.handleChange({target: {name: "A55_type", value: event.target.name}});
        }
    }


    render(){
        if(this.props.endorsements.includes("A55")) {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Ground Instructor Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Ground Instructor Rating type: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Basic" type="radio" name="Basic" onChange={this.eventHandler} checked={this.state.typeSelected==="Basic"}/>
                                    <Form.Check inline label="Advanced" type="radio" name="Advanced" onChange={this.eventHandler} checked={this.state.typeSelected==="Advanced"}/>
                                    <Form.Check inline label="Instrument" type="radio" name="Instrument" onChange={this.eventHandler} checked={this.state.typeSelected==="Instrument"}/>
                                </Col>
                            </Form.Group>
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

export default GroundInstructorAdditionalInfo;