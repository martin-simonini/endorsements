import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Container, Row, Col } from 'react-bootstrap';

import '../../css/Endorsements.css';

import {
    generic_endorsements,
    tsa_endorsement,
    student_pilot_endorsements,
    additional_student_pilot_endorsements,
    sport_pilot_endorsements,
    recreational_pilot_endorsements,
    private_pilot_endorsements,
    commercial_pilot_endorsements,
    instrument_rating_endorsements,
    flight_instructor_endorsements,
    sport_flight_instructor_endorsements,
    ground_instructor_endorsements
} from '../resources/Endorsements_Data';
import RepeatEndorsement from "./RepeatEndorsement";


class Endorsements extends Component{

    state = {
        endorsement_pool: [], //current list of endorsements from Endorsements_Data
        disableAll: false, //Disables checkbox when user hits "select all"
        displayAdditionalInfo: false, //Set true when the user has selected an endorsement to additional options are displayed.
    }

    /*
       * Changes a checkbox from unselected to selected and via versa.
     */
    changeSelected = ({target: {name}}) =>{
        // console.log("Name: "+name);
        if(this.props.endorsements.includes(name))//Removing selected item
        {
            //pushing change to App.js
            this.props.removeEndorsements(name);
        }
        else //Adding new item
        {
            //pushing change to App.js
            this.props.addEndorsements(name);
        }
    }

    addMultipleOfSameEndorsement = (num, id) =>{
        let current = this.getCount(id);
        // console.log("current count: "+current+", num: "+num);
        if(current < num){
            let newArr = this.props.endorsements;
            for(let i = 0; i < (num - current); i++){
                newArr.push(id);
            }

            //pushing change to App.js
            this.props.setEndorsements(newArr);
        }
        else if( current > num && num > 0){
            this.props.removeEndorsements(id);
            //console.log("props: "+this.props.endorsements);
            let newArr = this.props.endorsements.filter(i => i !== id);
            for(let i = 0; i < num; i++){
                newArr.push(id);
            }
            this.props.setEndorsements(newArr);
        }

        //add remove the number necessary to get to num
    }

    /*
     * Find the index of a endorsement in the endorsement_pool (and selected) array
     */
    findIndex = (name) =>{
        let index = -1;
        this.state.endorsement_pool.find(function(item, i){
            if(item.id === name){
                index = i;
                return i;
            }
            return -1;
        });
        return index;
    }

    getCount = id =>{
        let index = 0;
        for(let i = 0; i < this.props.endorsements.length; i++){
            if(this.props.endorsements[i] === id){
                index++;
            }
        }
        return index;
    }

    /*
      * Sets the endorsement_pool state variable so we can look at the proper endorsement.
      * This should only happen once on creation.
     */
    setEndorsementPool = (cat) =>{
        let newPool = [];

        if(cat === "GENERIC")
            newPool = generic_endorsements;
        else if(cat === "TRANSPORTATION SECURITY ADMINISTRATION (TSA) ENDORSEMENT")
            newPool = tsa_endorsement;
        else if(cat === "STUDENT PILOT ENDORSEMENTS")
            newPool = student_pilot_endorsements;
        else if( cat === "ADDITIONAL STUDENT PILOT ENDORSEMENTS FOR STUDENTS SEEKING SPORT OR RECREATIONAL PILOT CERTIFICATES")
            newPool = additional_student_pilot_endorsements;
        else if( cat === "SPORT PILOT ENDORSEMENTS")
            newPool = sport_pilot_endorsements;
        else if( cat === "RECREATIONAL PILOT ENDORSEMENTS")
            newPool = recreational_pilot_endorsements;

        //Verify endorsement_pool is not already set. May want to use something more robust than JSON.Stringify
        if(JSON.stringify(newPool) !== JSON.stringify(this.state.endorsement_pool)){
            this.setState({endorsement_pool: newPool});
        }
    }

    /*
     * This method enables the "select All functionality.
     */
    selectAll = () =>
    {
        let temp = []; //Holds the endorsements that need to be pushed up to App.js
        this.state.endorsement_pool.forEach(i => {
            temp.push(i.id);
        });

        if(this.state.disableAll === false){ //User wants to select all
            //Have to remove the endorsements that have been already selected so that
            // App.js doesn't have multiple copies.
            this.props.endorsements.forEach(i => {
                temp = temp.filter(item => item !== i);
            })
            this.props.addEndorsements(temp);
        }
        else{ //User wants to deselect all
            this.props.removeEndorsements(temp);
        }


        //Change state
        this.setState(prevState => ({
            disableAll: !prevState.disableAll
        }));
    }

    componentDidMount() {
        let newPool = [];

        if(this.props.category === "GENERIC")
            newPool = generic_endorsements;
        else if(this.props.category === "TRANSPORTATION SECURITY ADMINISTRATION (TSA) ENDORSEMENT")
            newPool = tsa_endorsement;
        else if(this.props.category === "STUDENT PILOT ENDORSEMENTS")
            newPool = student_pilot_endorsements;
        else if( this.props.category === "ADDITIONAL STUDENT PILOT ENDORSEMENTS FOR STUDENTS SEEKING SPORT OR RECREATIONAL PILOT CERTIFICATES")
            newPool = additional_student_pilot_endorsements;
        else if( this.props.category === "SPORT PILOT ENDORSEMENTS")
            newPool = sport_pilot_endorsements;
        else if( this.props.category === "RECREATIONAL PILOT ENDORSEMENTS")
            newPool = recreational_pilot_endorsements;
        else if( this.props.category === "PRIVATE PILOT ENDORSEMENTS")
            newPool = private_pilot_endorsements;
        else if( this.props.category === "COMMERCIAL PILOT ENDORSEMENTS")
            newPool = commercial_pilot_endorsements;
        else if( this.props.category === "INSTRUMENT RATING ENDORSEMENTS")
            newPool = instrument_rating_endorsements;
        else if( this.props.category === "FLIGHT INSTRUCTOR (OTHER THAN FLIGHT INSTRUCTORS WITH A SPORT PILOT RATING) ENDORSEMENTS")
            newPool = flight_instructor_endorsements;
        else if( this.props.category === "FLIGHT INSTRUCTOR WITH A SPORT PILOT RATING ENDORSEMENT")
            newPool = sport_flight_instructor_endorsements;
        else if( this.props.category === "GROUND INSTRUCTOR ENDORSEMENT")
            newPool = ground_instructor_endorsements;

        //Verify endorsement_pool is not already set. May want to use something more robust than JSON.Stringify
        if(JSON.stringify(newPool) !== JSON.stringify(this.state.endorsement_pool)){
            this.setState({endorsement_pool: newPool});
        }
    }

    render() {
        return(
            <>

                    <Row className="shadow-lg  border endorsementCard">
                        <Form.Check label="Select All" onChange={this.selectAll} />
                    </Row>
                    {this.state.endorsement_pool.map((end) => (
                        <Row className="shadow-lg  border  endorsementCard">
                            <Col>
                                <Form.Check
                                    name={end.id}
                                    label={end.name}
                                    onChange={this.changeSelected}
                                    disabled={this.state.disableAll}
                                    checked={this.props.endorsements.includes(end.id)}
                                />
                            </Col>
                            <Col className={this.props.endorsements.includes(end.id)?"shown":"hidden"}>
                                <RepeatEndorsement
                                    endorsement={end}
                                    add={this.addMultipleOfSameEndorsement}
                                    selected={this.props.endorsements.includes(end.id)}
                                />
                            </Col>
                        </Row>
                    ))}

            </>
        );
    }
}

export default Endorsements;