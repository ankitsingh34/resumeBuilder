import React, { Component } from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import './style.css'
class Display extends Component {

 render() {
     console.log('display',this.props)
     const {candidate} = this.props;
  return(
   <div>
       <Container>
           <Row>
               <Col sm={8}>
                   <div><h3>{candidate.name}</h3> </div>
                   <div><label>{candidate.jobTitle}</label></div>
                  
               </Col>
               <Col sm={4}>
                   <div><label>{candidate.phoneNo}</label></div>
                   <div><label>{candidate.emailAddress}</label></div>
                   <div><label>{candidate.location}</label></div>
               </Col>

           </Row>
           
           <Row>
                <Col sm={8}>
                  <div>
                       <h6>CAREER OBJECTIVE</h6>
                       <label >{candidate.carrerObjective}</label>
                       <h6>Education</h6>
                       <textarea style={{height:'150px'}} disabled className="taxtareadisplay">{candidate.education}</textarea>
                       <h6>EXPERENCES</h6>
                       <textarea style={{height:'150px'}} disabled className="taxtareadisplay">{candidate.experences}</textarea>
                       <h6 >ACTIVITIES</h6>
                       <textarea  disabled className="taxtareadisplay">{candidate.activities}</textarea>
                   </div>
                </Col>
                <Col sm={4}>
                    <div>
                        <h6>SKILLS</h6>
                        <textarea style={{height:'200px'}}  disabled className="taxtareadisplay" >{candidate.skills}</textarea>
                        <h6>ACHIEVEMENTS</h6>
                        <textarea disabled className="taxtareadisplay">{candidate.achievements}</textarea>
                        <h6>PERSONAL STRENGTHS</h6>
                        <textarea disabled className="taxtareadisplay">{candidate.personalStreangths}</textarea>
                        <h6>LANGUAGES</h6>
                        <textarea  className="taxtareadisplay">{candidate.languages}</textarea>
                    </div>
                </Col>
           </Row>
           <Button variant="primary" onClick={this.props.submit}>Edit Resume</Button>
           
       </Container>
       
   </div>
    )
   }
 }


export default Display