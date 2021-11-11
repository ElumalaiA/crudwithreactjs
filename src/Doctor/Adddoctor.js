import React from 'react';  
import axios from 'axios';  
import '../Doctor/Adddoctor.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
//import Doctorlist from './Doctorlist';
class Adddoctor extends React.Component {  
  constructor(props) {  
      super(props)  

  this.onChangeFirstName= this.onChangeFirstName.bind(this);  
  this.onChangeLastName = this.onChangeLastName.bind(this);  
  this.onChangeSex = this.onChangeSex.bind(this);  
  this.onChangeAge = this.onChangeAge.bind(this);  
  this.onChangeDate_of_Birth= this.onChangeDate_of_Birth.bind(this);  
  this.onChangeSpecialization = this.onChangeSpecialization.bind(this);  
  this.onChangeFromTime = this.onChangeFromTime.bind(this);  
  this.onChangeToTime = this.onChangeToTime.bind(this);
  this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);  
  this.onSubmit = this.onSubmit.bind(this);  

       this.state = {  
          FirstName: '',  
          LastName: '',  
          Sex: '',  
          Age: '' ,
          Date_of_Birth: '',  
          Specialization: '',  
          FromTime: '',  
          ToTime: '',
          PhoneNumber: ''  

      }  
  }  

onChangeFirstName(e) {  
  this.setState({  
      FirstName: e.target.value  
  });  
}  
onChangeLastName(e) {  
  this.setState({  
      LastName: e.target.value  
  });    
}  
onChangeSex(e) {  
  this.setState({  
      Sex: e.target.value  
  });  
}  
  onChangeAge(e) {  
      this.setState({  
          Age: e.target.value  
      });  
}  
onChangeDate_of_Birth(e) {  
  this.setState({  
      Date_of_Birth: e.target.value  
  });  
}  
onChangeSpecialization(e) {  
  this.setState({  
      Specialization: e.target.value  
  });  
}  
onChangeFromTime(e) {  
  this.setState({  
      FromTime: e.target.value  
  });  
}  
onChangeToTime(e) {  
  this.setState({  
      ToTime: e.target.value  
  });  
}  
onChangePhoneNumber(e) {  
  this.setState({  
      PhoneNumber: e.target.value  
  });  
}  

onSubmit(e) {  
 // debugger;  
  e.preventDefault();  
  const obj = {  
      Id:this.state.id,  
    FirstName: this.state.FirstName,  
    LastName: this.state.LastName,  
    Sex: this.state.Sex,  
    Age: this.state. Age,
    Date_of_Birth: this.state.Date_of_Birth,  
    Specialization: this.state.Specialization,  
    FromTime: this.state.FromTime,  
    ToTime: this.state.ToTime ,
    PhoneNumber: this.state.PhoneNumber  

  };  debugger;
  obj.Id=0;
  axios.post('https://localhost:44352/api/Doctors/', obj)  
      .then(res => {
      debugger;  
      this.props.history.push('/Doctorlist') ;
      })
}  
  render() {  
      return (  
          <Container className="App">  

           <h4 className="PageHeading"><h1>Add Doctor Details</h1></h4>  
              <Form className="form" onSubmit={this.onSubmit}>  
                  <Col>  
                      <FormGroup row>  
                          <Label for="name" sm={2}>FirstName</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChangeFirstName}  
                              placeholder="Enter First Name" />  
                          </Col>  
                      </FormGroup>  
                      <FormGroup row>  
                          <Label for="Password" sm={2}>LastName</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="LastName" value={this.state.LastName} onChange={this.onChangeLastName} placeholder="Enter Last Name" />  
                          </Col>  
                      </FormGroup>  
                       <FormGroup row>  
                          <Label for="Password" sm={2}>Sex</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="Sex" value={this.state.Sex} onChange={this.onChangeSex} placeholder="Enter Sex" />  
                          </Col>  
                      </FormGroup>  
                       <FormGroup row>  
                          <Label for="Password" sm={2}>Age</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="Age"value={this.state.Age} onChange={this.onChangeAge} placeholder="Enter Age" />  
                          </Col>  
                      </FormGroup>   
                      <FormGroup row>  
                          <Label for="name" sm={2}>Date_of_Birth</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="Date_of_Birth" value={this.state.Date_of_Birth} onChange={this.onChangeDate_of_Birth}  
                              placeholder="Enter Date of Birth" />  
                          </Col>  
                      </FormGroup>  
                      <FormGroup row>  
                          <Label for="Password" sm={2}>Specialization</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="Specialization" value={this.state.Specialization} onChange={this.onChangeSpecialization} placeholder="Enter Specialization" />  
                          </Col>  
                      </FormGroup>  
                       <FormGroup row>  
                          <Label for="Password" sm={2}>FromTime</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="FromTime" value={this.state.FromTime} onChange={this.onChangeFromTime} placeholder="Enter From Time" />  
                          </Col>  
                      </FormGroup>  
                       <FormGroup row>  
                          <Label for="Password" sm={2}>ToTime</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="ToTime" value={this.state.ToTime} onChange={this.onChangeToTime} placeholder="Enter To Time" />  
                          </Col>  
                      </FormGroup>  
                      <FormGroup row>  
                          <Label for="Password" sm={2}>PhoneNumber</Label>  
                          <Col sm={10}>  
                              <Input type="text" name="PhoneNumber"value={this.state.PhoneNumber} onChange={this.onChangePhoneNumber} placeholder="Enter Phone Number" />  
                          </Col>  
                      </FormGroup> 
                  </Col>  
                  <Col>  
                      <FormGroup row>  
                          <Col sm={5}>  
                          </Col>  
                          <Col sm={1}>  
                        <Button type="submit" color="success">Submit</Button>{' '}  
                          </Col>  
                          <Col sm={1}>  
                              <Button color="danger">Cancel</Button>{' '}  
                          </Col>  
                          <Col sm={5}>  
                          </Col>  
                      </FormGroup>  
                  </Col>  
              </Form>  
          </Container>  
      );  
  }  

}  

export default Adddoctor; 