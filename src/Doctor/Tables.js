import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  


class Tables extends Component {  
  constructor(props) {  
    super(props);  
    }  

    DeleteDoctor= () =>{
     // debugger;  
     axios.delete('https://localhost:44352/api/Doctors?id='+this.props.obj.doctorID)  
    .then(json => {  
     // debugger;
      window.location.reload('/Doctorlist');
    // if(json.data.Status=='DELETE'){  
    // alert('Record deleted successfully!!');  
    
    })  
    } 
    //}  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.doctorID}  
          </td>  
          <td>  
            {this.props.obj.firstName}  
          </td>  
          <td>  
            {this.props.obj.lastName}  
          </td>  
          <td>  
            {this.props.obj.age}  
          </td>  
          <td>  
            {this.props.obj.sex}  
          </td> 
          <td>  
            {this.props.obj.date_of_Birth}  
          </td>  
          <td>  
            {this.props.obj.specialization}  
          </td>  
          <td>  
            {this.props.obj.fromTime}  
          </td>  
          <td>  
            {this.props.obj.toTime}  
          </td>  
          <td>  
            {this.props.obj.phoneNumber}  
          </td>  
          <td>  
          <Link to={"/Editdoctor/"+this.props.obj.doctorID} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteDoctor} className="btn btn-danger">Delete</button>  
            {/* <Link to={"/delete/"+this.props.obj.id} className="btn btn-danger">Delete</Link>  */}
          </td>  
          
        </tr>  
    );  
  }  
}  

export default Tables; 