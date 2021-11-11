import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Tables'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

 class Doctorlist extends React.Component {  

  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
        //debugger;
       axios.get("https://localhost:44352/api/Doctors")  
        .then(response => {console.log(response.data);
          this.setState({ business: response.data });  
          //debugger;  

        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
   

    tabRow(){  
      //debugger;
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">Doctor List</h4>  
          <table className="table table-stripped" >  
            <thead>  
              <tr>  
                <th>DoctorID</th>
                <th>FirstName</th>  
                <th>LastName</th>  
                <th>Sex</th>  
                <th>Age</th>
                <th>Date_of_Birth</th>  
                <th>Specialization</th>  
                <th>FromTime</th>  
                <th>ToTime</th> 
                <th>PhoneNumber</th> 
                <th>Edit</th>
                <th>Delete</th> 
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  

  export default Doctorlist;