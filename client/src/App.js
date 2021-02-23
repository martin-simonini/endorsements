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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName:'(First Name, MI, Last name)______________________________________',
            gender: '(he or she)_____________',
            cfiNumber: '',
            expDate: '',
            signedDate: '',
            endorsements: [],
            generic_info: ['________________________','________________________'],
            tsa_info: '(type of document) ________________________',
            student_info: {
                makeModel:'',
                A5_airport: '',
                A8_airport: '',
                A8_limitations: '',
                category: '',
                A10_origin_airport: '',
                A10_route: '',
                A10_landings: '',
                A10_date: '',
                A10_limitations: '',
                A11_airport: '',
                A11_limitations: '',
                A12_classB: '',
                A12_limitations: '',
                A13_airport:'',
                A13_limitations: '',
            }

            /* student_info: {
                A3_makeModel: '',
                A4_makeModel: '',
                A5_airport: '',
                A6_makeModel: '',
                A7_makeModel: '',
                A8_airport: '',
                A8_limitations: '',
                A9_makeModel: '',
                A9_category: '',
                A10_origin_airport: '',
                A10_route: '',
                A10_landings: '',
                A10_makeModel: '',
                A10_date: '',
                A10_limitations: '',
                A11_airport: '',
                A11_limitations: '',
                A12_classB: '',
                A12_limitations: '',
                A13_airport:'',
                A13_limitations: '',
            }*/
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
    test = () =>{console.log(this.state.student_info)}
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
                    />
                    <StudentPilotAdditionalInfo
                        handleChange={this.handleStudentPilotAdditionalInfo}
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
