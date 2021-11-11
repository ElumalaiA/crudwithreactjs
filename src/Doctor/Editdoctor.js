import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Doctor/Adddoctor'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
    this.onChangedoctorID = this.onChangedoctorID.bind(this);
    this.onChangefirstName= this.onChangefirstName.bind(this);  
    this.onChangelastName = this.onChangelastName.bind(this);  
    this.onChangesex = this.onChangesex.bind(this);  
    this.onChangeage = this.onChangeage.bind(this);  
    this.onChangedate_of_Birth= this.onChangedate_of_Birth.bind(this);  
    this.onChangespecialization = this.onChangespecialization.bind(this);  
    this.onChangefromTime = this.onChangefromTime.bind(this);  
    this.onChangetoTime = this.onChangetoTime.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  

         this.state = { 
             doctorID:'', 
            firstName: '',  
            lastName: '',  
            sex: '',  
            age: '' ,
            date_of_Birth: '',  
            specialization: '',  
            fromTime: '',  
            toTime: '',
            phoneNumber: ''  

        }  
    }  

  componentDidMount() {  
      axios.get('https://localhost:44352/api/Doctors/'+this.props.match.params.doctorID)  
          .then(response => {  
              this.setState({   
                firstName: response.data.firstName,   
                lastName: response.data.lastName,  
                sex: response.data.sex,  
                age: response.data.age,
                date_of_Birth: response.data.date_of_Birth,   
                specialization: response.data.specialization,  
                fromTime: response.data.fromTime,  
                toTime: response.data.toTime,
                phoneNumber: response.data.phoneNumber });  

          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
onChangedoctorID(e) {  
    this.setState({  
        doctorID: e.target.value  
    });  
  }  

  onChangefirstName(e) {  
    this.setState({  
        firstName: e.target.value  
    });  
  }  
  onChangelastName(e) {  
    this.setState({  
        lastName: e.target.value  
    });    
  }  
  onChangesex(e) {  
    this.setState({  
        sex: e.target.value  
    });  
}  
    onChangeage(e) {  
        this.setState({  
            age: e.target.value  
        });  
  }  
  onChangedate_of_Birth(e) {  
    this.setState({  
        date_of_Birth: e.target.value  
    });  
}  
onChangespecialization(e) {  
    this.setState({  
        specialization: e.target.value  
    });  
}  
onChangefromTime(e) {  
    this.setState({  
        fromTime: e.target.value  
    });  
}  
onChangetoTime(e) {  
    this.setState({  
        toTime: e.target.value  
    });  
}  
onChangephoneNumber(e) {  
    this.setState({  
        phoneNumber: e.target.value  
    });  
}  

  onSubmit(e) {  
    //debugger;  
    e.preventDefault();  
    const obj = {  
        DoctorID:this.props.match.params.doctorID,  
      FirstName: this.state.firstName,  
      LastName: this.state.lastName,  
      Sex: this.state.sex,  
      Age: this.state.age,
      Date_of_Birth: this.state.date_of_Birth,  
      Specialization: this.state.specialization,  
      FromTime: this.state.fromTime,  
      ToTime: this.state.toTime ,
      PhoneNumber: this.state.phoneNumber  

    }; 
    //debugger; 
    axios.put('https://localhost:44352/api/Doctors/'+this.props.match.params.doctorID,obj)  
        .then(res => {
        //debugger;  
        this.props.history.push('/Doctorlist');
        })
  }  
    render() {  
        return (  
            <Container className="App">  

             <h4 className="PageHeading">Update Doctor Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>FirstName</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="FirstName" value={this.state.firstName} onChange={this.onChangefirstName}  
                                placeholder="Enter First Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>LastName</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="LastName" value={this.state.lastName} onChange={this.onChangelastName} placeholder="Enter Last Name" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Sex</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Sex" value={this.state.sex} onChange={this.onChangesex} placeholder="Enter Sex" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>Age</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Age"value={this.state.age} onChange={this.onChangeage} placeholder="Enter Age" />  
                            </Col>  
                        </FormGroup>   
                        <FormGroup row>  
                            <Label for="name" sm={2}>Date_of_Birth</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Date_of_Birth" value={this.state.date_of_Birth} onChange={this.onChangedate_of_Birth}  
                                placeholder="Enter Date of Birth" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Specialization</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Specialization" value={this.state.specialization} onChange={this.onChangespecialization} placeholder="Enter Specialization" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>FromTime</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="FromTime" value={this.state.fromTime} onChange={this.onChangefromTime} placeholder="Enter From Time" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="Password" sm={2}>ToTime</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Age"value={this.state.toTime} onChange={this.onChangetoTime} placeholder="Enter To Time" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>PhoneNumber</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="PhoneNumber"value={this.state.phoneNumber} onChange={this.onChangephoneNumber} placeholder="Enter Phone Number" />  
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

export default Edit;  