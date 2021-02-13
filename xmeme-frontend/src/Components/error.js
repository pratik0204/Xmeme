import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import {connect} from 'react-redux'

class DescriptionAlerts extends React.Component{

  errorAl=[];

  size = (obj)=> {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  render(){

    {console.log(this.props.err)}

    {if(this.size(this.props.err)===3){
      this.errorAl=[];
      this.errorAl.push(<Alert style={{margin:"15px"}} severity="error">
      <AlertTitle>Error</AlertTitle>
        First Name — <strong>{this.props.err.name}</strong>
      </Alert>)

      this.errorAl.push(<Alert style={{margin:"15px"}} severity="error">
      <AlertTitle>Error</AlertTitle>
        Caption — <strong>{this.props.err.caption}</strong>
      </Alert>)

      this.errorAl.push(<Alert style={{margin:"15px"}} severity="error">
      <AlertTitle>Error</AlertTitle>
        Photo URL — <strong>{this.props.err.url}</strong>
      </Alert>)
  }else if(this.size(this.props.err)===1){
    this.errorAl=[];
    this.errorAl.push(<Alert severity="error">
    <AlertTitle>Error</AlertTitle>
        <strong>{this.props.err.detail}</strong>
    </Alert>)
  }}

  {if(this.props.succ){
    this.errorAl=[];
    this.errorAl.push(<Alert severity="success">
    <AlertTitle>Success</AlertTitle>
        <strong>Your performed action was successful.</strong>
    </Alert>)
  }}

    return (
      <div>
       
        {/* <Alert style={{display:warning}} severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert style={{display:info}} severity="info">
          <AlertTitle>Update</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert style={{display:success}}  severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert> */}
        {this.errorAl}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
      err:state.error,
      succ:state.success
    }
  }

export default connect(mapStateToProps)(DescriptionAlerts)
