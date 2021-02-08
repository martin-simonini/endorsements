import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import moment from 'moment';

import './css/App.css';

import { categories } from './components/resources/Endorsements_Data';
import StudentInfo from './components/people_information/StudentInfo';
import InstructorInfo from "./components/people_information/InstructorInfo";
import EndorsementSelection from "./components/endorsement_selection/EndorsementSelection";
import GenericAdditionalInfo from "./components/additional_information/GenericAdditionalInfo";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName:'(First Name, MI, Last name)_________________________',
            gender: '[he or she]',
            cfiNumber: '',
            expDate: '',
            signedDate: '',
            endorsements: [],
            displayAddInfo: new Array(categories.length).fill(false),
            generic_info: ['________________________','________________________']
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
        console.log("newArr: "+newArr);
        this.setState({endorsements: newArr});

    }
   /* removeEndorsements = (end) =>{
        end.toString().split(",").forEach(i => {
            console.log("i: "+i);
            let tempList = this.state.endorsements.filter(item => JSON.stringify(item) !== JSON.stringify(i));
            console.log("temp: "+tempList);
            this.setState({endorsements: tempList});
        })

    }*/

    updateAdditionalInfo = ({cat,newValue}) =>{
        let newAddInfo = this.state.displayAddInfo;
        let index = categories.findIndex(i => cat === i);
        newAddInfo[index] = newValue;
        this.setState({displayAdditionalInfo: newAddInfo});
    }
  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'newPdf.pdf');
        })
  }

  test = () =>{console.log("Endorsements: "+this.state.endorsements)}

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
                                updateAdditionalInfo={this.updateAdditionalInfo}
                                endorsements={this.state.endorsements}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12}>
                            <GenericAdditionalInfo display={this.state.displayAddInfo[0]} handleChange={this.handleProcessedChange} endorsements={this.state.endorsements}/>
                        </Col>
                    </Row>
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
