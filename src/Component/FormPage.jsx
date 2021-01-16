import React, { Component } from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap';

class FormPage extends Component {
  constructor(props){
    super(props) 
    
  }
  onFormSubmit = (evt) =>{
    evt.preventDefault();
    this.props.submit();
  }
 render() {
   const {candidate}= this.props ;
  return(

    <Container>
      <h5>Create Resume</h5>
      <Form onSubmit={this.onFormSubmit}>
        {/* name  */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >Name</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name='name' onChange={this.props.onInputChange} value={candidate.name} placeholder="Enter Name"/>
          </Col>
        </Form.Group>
        {/* emailAddress */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >Email Address</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name='emailAddress' onChange={this.props.onInputChange} value={candidate.emailAddress} placeholder="Enter Email Address"/>
          </Col>
        </Form.Group>
        {/* phoneNo  */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >Phone No</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name='phoneNo' onChange={this.props.onInputChange} value={candidate.phoneNo} placeholder="Enter Phone NO"/>
          </Col>
        </Form.Group>
        {/* jobTitle */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >Job Title</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name='jobTitle' onChange={this.props.onInputChange} value={candidate.jobTitle} placeholder="Enter Job Title"/>
          </Col>
        </Form.Group>
        {/* carrerObjective */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >carrer Objective</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='carrerObjective' onChange={this.props.onInputChange} value={candidate.carrerObjective} placeholder="Discribe carrer Objective "/>
          </Col>
        </Form.Group>
        {/* location  */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >location </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='location' onChange={this.props.onInputChange} value={candidate.location} placeholder="location "/>
          </Col>
        </Form.Group>
        {/* personalStreangths */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >personalStreangths </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='personalStreangths' onChange={this.props.onInputChange} value={candidate.personalStreangths} placeholder="Enter personalStreangths "/>
          </Col>
        </Form.Group>
        {/* skills */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >skills </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='skills' onChange={this.props.onInputChange} value={candidate.skills} placeholder="Enter Skills"/>
          </Col>
        </Form.Group>
        {/* activities */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >activities </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='activities' onChange={this.props.onInputChange} value={candidate.activities} placeholder="Enter activities "/>
          </Col>
        </Form.Group>
        {/* achievements */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >achievements </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='achievements' onChange={this.props.onInputChange} value={candidate.achievements} placeholder="Enter achievements"/>
          </Col>
        </Form.Group>
        {/* languages  */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >languages </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='languages' onChange={this.props.onInputChange} value={candidate.languages} placeholder="Enter languages "/>
          </Col>
        </Form.Group>
        {/* experences */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >experences </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='experences' onChange={this.props.onInputChange} value={candidate.experences} placeholder="Enter experences "/>
          </Col>
        </Form.Group>
        {/* education  */}
        <Form.Group as={Row} >
          <Col sm={2}>
            <Form.Label >education </Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" row={3} name='education' onChange={this.props.onInputChange} value={candidate.education} placeholder="Enter education "/>
          </Col>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    )
   }
 }


export default FormPage ;