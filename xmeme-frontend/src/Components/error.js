import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function DescriptionAlerts(props) {
  const classes = useStyles();

  const [warning,setWarn]=React.useState('none')
  const[error,setError]=React.useState('none')
  const[success,setSucc]=React.useState('none')
  const[info,setInfo]=React.useState('none')

  {console.log(JSON.stringify(props.err))}

  return (
    <div className={classes.root}>
      <Alert style={{display:error}} severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert style={{display:warning}} severity="warning">
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
      </Alert>
    </div>
  );
}

const mapStateToProps = (state) =>{
    return{
      err:state.error
    }
  }

export default connect(mapStateToProps)(DescriptionAlerts)
