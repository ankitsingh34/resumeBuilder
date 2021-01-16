import React, { Component } from 'react'

import FormPage from './FormPage'
import Display from './Display'

class Controller extends Component {
 constructor(props){
     super(props)
     this.state ={
         page : true ,
         candidate : {
            name : '' ,
            jobTitle : '' ,
            carrerObjective : '' ,
            phoneNo : '' ,
            emailAddress : ' ' ,
            location : '',
            skills:'',
            personalStreangths: ' ' ,
            activities : '',
            achievements : '' ,
            languages : '' ,
            experences : ' ',
            education : ' ' ,
         }
       
     }
     this.onToggle = this.onToggle.bind(this)
     this.setData = this.setData.bind(this)
     this.onInputChange = this.onInputChange.bind(this)
 }
 onInputChange = (evt) =>{
    const newCandidate = this.state.candidate ;
    newCandidate[evt.target.name] = evt.target.value 
    this.setState({candidate:newCandidate}) ; 
  }
 setData(data){
     console.log('info',data)
    this.setState({candidate:data})
 }
 onToggle(){
        let pagechange = !this.state.page
        this.setState({page :pagechange})
 }
 render() {
     console.log('container',this.state)
  return(
   <div>

       {this.state.page?
       <FormPage setData={this.setData}
       onInputChange = {this.onInputChange} 
       candidate={this.state.candidate}
       submit={this.onToggle} />
       :<Display submit={this.onToggle} candidate={this.state.candidate}/>
        }
   </div>
    )
   }
 }



export default Controller