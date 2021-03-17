import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

import './css/App.css';

import StudentInfo from './components/people_information/StudentInfo';
import InstructorInfo from "./components/people_information/InstructorInfo";
import EndorsementSelection from "./components/endorsement_selection/EndorsementSelection";
import GenericAdditionalInfo from "./components/additional_information/GenericAdditionalInfo";
import TSAAdditionalInfo from "./components/additional_information/TSAAdditionalInfo";
import StudentPilotAdditionalInfo from "./components/additional_information/StudentPilotAdditionalInfo";
import AdditionalStudentPilotAdditionalInfo
    from "./components/additional_information/AdditionalStudentPilotAdditionalInfo";
import SportPilotAdditionalInfo from "./components/additional_information/SportPilotAdditionalInfo";
import RecreationalPilotAdditionalInfo from "./components/additional_information/RecreationalPilotAdditionalInfo";
import PrivatePilotAdditionalInfo from "./components/additional_information/PrivatePilotAdditionalInfo";
import CommercialPilotAdditionalInfo from "./components/additional_information/CommercialPilotAdditionalInfo";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName:'(First Name, MI, Last name)______________________________________',
            gender: '(he or she)_________',
            cfiNumber: '',
            expDate: '',
            signedDate: '',
            endorsements: [],
            generic_info: ['________________________','________________________'],
            tsa_info: '(type of document) ________________________',
            student_info: {
                makeModel:'(Make and Model) ________________________',
                A5_airport: '____________________',
                A8_airport: '(airport name)____________________',
                A8_limitations: '________________________________',
                category: '(category)________________________',
                A10_origin_airport: '(origination airport)________________________',
                A10_route: '(route)________________________',
                A10_landings: '________________________',
                A10_date: '________________________',
                A10_limitations: '________________________________',
                A11_airport: '(airport name)________________________',
                A11_limitations: '________________________________________________',
                A12_classB: '(airport name)________________________',
                A12_limitations: '(limitations)________________________________',
                A13_airport:'(airport name)________________________',
                A13_limitations: '________________________________',
                A15_airspace:'(name of airspace)________________________',
                A15_airport:'(airport name)________________________',
                A15_limitations:'(limitations)________________________________',
                A16_airport:'(airport name)________________________',
                A16_limitations:'(limitations)________________________________'
            },
            sport_makeModel: '(Make and Model) ________________________',
            sport_proficiency_check: '(proficiency check)________________________',
            sport_categoryClass: '(category and class)________________________',
            sport_knowledge_test: '-________________________',
            recreational_knowledge_test: '________________________',
            A27_airport:'(airport name)________________________',
            recreational_makeModel: '(Make and Model) ________________________',
            A30_date: '________________________',
            A30_limitations: '(limitations)________________________________',
            A33_practical:'_____________________',
            A35_practical:'_____________________'
        }

    }

    handleChange = ({target: {value,name}}) =>
    {
        // console.log("["+name+"]: "+value);
        if(name === 'expDate')
        {
            this.setState({expDate: moment(value).format("MM/YYYY")});
        }
        else if(name === 'signedDate')
        {
            this.setState({signedDate: moment(value).format("MM/DD/YYYY")});
        }
        else{
            this.setState({[name]: value});
        }
    }

    handleProcessedChange = ({value,name}) =>{
        this.setState({[name]: value});
    }

    addEndorsements = (end) =>{
        const newArr = this.state.endorsements.concat(end);
        this.setState({endorsements: newArr});
    }

    setEndorsements = (end) =>{
        this.setState({endorsements: end});
    }

    removeEndorsements = (id) =>{
        // console.log("id: "+id);
        const newArr = this.state.endorsements.filter(i => i !== id);
        this.setState({endorsements: newArr});

    }

    handleStudentPilotAdditionalInfo = ({target: {name,value}}) =>{
        this.setState(prevState =>({
            student_info: {
                ...prevState.student_info,
                [name]: value
            }
        }))
    }

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    //test = () =>{console.log("Endorsements: "+this.state.endorsements)}
    test = () =>{console.log(this.state)}
    render() {
        return (
            <div className="App">
                <div className="basicInfo">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h1 className="text-center">Basic Information</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <StudentInfo handleChange={this.handleChange}/>
                            </Col>
                            <Col md={6}>
                                <InstructorInfo handleChange={this.handleChange}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="endorsement_selection_container">
                    <Row>
                        <Col md={12}>
                            <h1 className="text-center">Endorsement Selection</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <EndorsementSelection
                                addEndorsements={this.addEndorsements}
                                setEndorsements={this.setEndorsements}
                                removeEndorsements={this.removeEndorsements}
                                //updateAdditionalInfo={this.updateAdditionalInfo}
                                endorsements={this.state.endorsements}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>

                    <GenericAdditionalInfo
                        handleChange={this.handleProcessedChange}
                        endorsements={this.state.endorsements}
                    />
                    <TSAAdditionalInfo
                        handleChange={this.handleProcessedChange}
                        endorsements={this.state.endorsements}
                        tsaInfo={this.state.tsa_info}
                    />
                    <StudentPilotAdditionalInfo
                        handleChange={this.handleStudentPilotAdditionalInfo}
                        endorsements={this.state.endorsements}
                        studentPilotInfo={this.state.student_info}
                    />
                    <AdditionalStudentPilotAdditionalInfo
                        handleChange={this.handleStudentPilotAdditionalInfo}
                        endorsements={this.state.endorsements}
                    />
                    <SportPilotAdditionalInfo
                        handleChange={this.handleChange}
                        endorsements={this.state.endorsements}
                    />
                    <RecreationalPilotAdditionalInfo
                        handleChange={this.handleChange}
                        endorsements={this.state.endorsements}
                    />
                    <PrivatePilotAdditionalInfo
                        handleChange={this.handleChange}
                        endorsements={this.state.endorsements}
                    />
                    <CommercialPilotAdditionalInfo
                        handleChange={this.handleChange}
                        endorsements={this.state.endorsements}
                    />

                </Container>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.test}>Test</Button>
                            <Button onClick={this.createAndDownloadPdf} variant="primary" size="lg" block>Generate PDF</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
