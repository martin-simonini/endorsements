import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import StudentInfo from './components/StudentInfo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentName:'(First Name, MI, Last name)_________________________',
            gender: '[he or she]'
        }
    }

    handleChange = ({target: {value,name}}) =>
    {
        console.log("["+name+"]: "+value);
        if(name === 'studentName' && value === ''){
            this.setState({studentName: '(First Name, MI, Last name)_________________________'});
        }
        this.setState({[name]: value});
    }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'newPdf.pdf');
        })
  }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="basic-info-title">Basic Information</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <StudentInfo handleChange={this.handleChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button onClick={this.createAndDownloadPdf}>Download PDF</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
