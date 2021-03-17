import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';


class CommercialPilotAdditionalInfo extends Component{

    state = {
        practicalSelected: ""
    }

    practicalChangeHandler = (event) => {
        if( this.state.practicalSelected !== event.target.name){
            this.setState({practicalSelected: event.target.name});
            this.props.handleChange({target: {name: "A35_practical", value: event.target.name}});
        }
    }


    render(){
        if(this.props.endorsements.includes("A35")) {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Commercial Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Commercial Pilot Practical test: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="ASEL" type="radio" name="ASEL" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="ASEL"}/>
                                    <Form.Check inline label="AMEL" type="radio" name="AMEL" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="AMEL"}/>
                                    <Form.Check inline label="ASES" type="radio" name="ASES" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="ASES"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Helicopter"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Gyroplane"}/>
                                    <Form.Check inline label="Balloon" type="radio" name="Balloon" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Balloon"}/>
                                    <Form.Check inline label="Airship" type="radio" name="Airship" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Airship"}/>
                                    <Form.Check inline label="Glider" type="radio" name="Glider" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Glider"}/>
                                    <Form.Check inline label="Powered-Lift" type="radio" name="Powered-Lift" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Powered-Lift"}/>
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

export default CommercialPilotAdditionalInfo;