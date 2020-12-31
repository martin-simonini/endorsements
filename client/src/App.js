import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import moment from 'moment';

import './App.css';

import StudentInfo from './components/StudentInfo';
import InstructorInfo from "./components/InstructorInfo";
import EndorsementSelection from "./components/EndorsementSelection";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            studentName:'(First Name, MI, Last name)_________________________',
            gender: '[he or she]',
            cfiNumber: '',
            expDate: '',
            signedDate: '',
            endorsements: []
        }
    }

    handleChange = ({target: {value,name}}) =>
    {
        // console.log("["+name+"]: "+value);
        if(name === 'studentName' && value === ''){
            this.setState({studentName: '(First Name, MI, Last name)_________________________'});
        }
        else if(name === 'expDate')
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

    addEndorsements = (end) =>{
        const newArr = this.state.endorsements.concat(end);
        this.setState({endorsements: newArr});
    }


    removeEndorsements = (end) =>{
        end.toString().split(",").forEach(i => {
            this.setState(prevState => ({
                endorsements: prevState.endorsements.filter(item => item != i)
            }));
        })

    }
  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'newPdf.pdf');
        })
  }

  test = () =>{console.log("Endorsements: "+this.state.endorsements);}

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
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="text-center">Endorsement Selection</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <EndorsementSelection addEndorsements={this.addEndorsements} removeEndorsements={this.removeEndorsements}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.test} variant="primary" size="lg" block>TEST</Button>
                            <Button onClick={this.createAndDownloadPdf} variant="primary" size="lg" block>Generate PDF</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
