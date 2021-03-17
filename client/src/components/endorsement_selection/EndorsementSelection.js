import React, { Component } from 'react';
import { Accordion, Card, useAccordionToggle } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDoubleRight, ChevronDoubleDown } from 'react-bootstrap-icons';

import Endorsements from "./Endorsements";
import { categories } from '../resources/Endorsements_Data';


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

    constructor(props) {
        super(props);
        this.state = {
            activeKey: null,
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
                                    <div>
                                        <Endorsements key={index.toString()}
                                                      category={cat}
                                                      addEndorsements={this.props.addEndorsements}
                                                      setEndorsements={this.props.setEndorsements}
                                                      removeEndorsements={this.props.removeEndorsements}
                                                      endorsements={this.props.endorsements}
                                        />
                                    </div>
                                    <div>

                                    </div>
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