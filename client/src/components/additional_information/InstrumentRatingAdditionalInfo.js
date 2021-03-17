import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';


class InstrumentRatingAdditionalInfo extends Component{

    state = {
        practicalSelected: ""
    }

    practicalChangeHandler = (event) => {
        if( this.state.practicalSelected !== event.target.name){
            this.setState({practicalSelected: event.target.name});
            this.props.handleChange({target: {name: "instrument_category", value: event.target.name}});
        }
    }


    render(){
        if(this.props.endorsements.includes("A38") || this.props.endorsements.includes("A39") || this.props.endorsements.includes("A40")) {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Instrument Rating Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Instrument Rating Category: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="Airplane" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Airplane"}/>
                                    <Form.Check inline label="Helicopter" type="radio" name="Helicopter" onChange={this.practicalChangeHandler} checked={this.state.practicalSelected==="Helicopter"}/>
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

export default InstrumentRatingAdditionalInfo;