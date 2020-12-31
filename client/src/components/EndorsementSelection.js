import React, { Component } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDoubleRight, ChevronDoubleDown } from 'react-bootstrap-icons';

import Endorsements from "./Endorsements";
import { categories, generic_endorsements } from './resources/Endorsements_Data';


function CustomToggle({ children, eventKey, handleClick }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () => {
        handleClick();
    });

    return (
        <div className="card-header" type="button" onClick={decoratedOnClick}>
            {children}
        </div>
    );
}


class EndorsementSelection extends Component{
// {name: '', id: , cat: ''},
    /*state = {
        options:[
            {name: 'Prerequisites for practical test', id: 1, cat: 'Generic'},
            {name: 'Review of deficiencies identified on airman knowledge test', id: 2, cat: 'Generic'},
            {name: 'Pre-solo aeronautical knowledge: § 61.87(b)', id: 3, cat: 'Student Pilot'},
            {name: 'Pre-solo flight training: § 61.87(c)(1) and (2).', id:4 , cat: 'Student Pilot'},
            {name: 'Solo flight (first 90 calendar-day period): § 61.87(n)', id:4 , cat: 'Student Pilot'},
        ],
        selectedValues: []
    }*/

    constructor(props) {
        super(props);
        /*const data = [
            { name: "mike", age: 22 },
            { name: "clive", age: 25 },
            { name: "morgan", age: 82 }
        ];*/
        this.state = {
            activeKey: null,
            data: [
                { name: "test", age: 18},
                { name: "mike", age: 22 },
                { name: "clive", age: 25 },
                { name: "morgan", age: 82 }
            ]
        }
    }

    setActiveKey = (key) => {
        this.setState({activeKey: key})
    }


    render() {
        return(
            <>
                <Accordion activeKey={this.state.activeKey}>
                    {categories.map((cat, index) => (
                        <Card key={(index+1)}>
                            <CustomToggle
                                as={Card.Header}
                                eventKey={(index+1)}
                                handleClick={() => {
                                    if (this.state.activeKey === (index+1)) {
                                        this.setActiveKey(null);
                                    } else {
                                        this.setActiveKey((index+1));
                                    }
                                }}
                            >
                                {this.state.activeKey === (index+1) ? <ChevronDoubleDown /> : <ChevronDoubleRight />}
                                {"   "}
                                {cat}
                            </CustomToggle>
                            <Accordion.Collapse eventKey={(index+1)}>
                                <Card.Body>
                                    <Endorsements category={cat} addEndorsements={this.props.addEndorsements} removeEndorsements={this.props.removeEndorsements}/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            </>
        );
    }
}

export default EndorsementSelection;