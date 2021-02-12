import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { yellow } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postApiCall} from '../Redux/actionsDispatchers/postCall'
import {getApiCall} from '../Redux/actionsDispatchers/getCalls'
import Error from '../Components/error'

const styles = theme =>({
  paper: {
    marginTop: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "20px",
    backgroundColor: "blue",
    width: "80px",
    height: "80px",
  },
  large:{
    width: "80px",
    height: "80px",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "30px",
  },
  submit: {
    margin: "30px 0px 20px"
  },
});

class Form extends Component {
  
  state={
    firstName:'',
    lastName:'',
    caption:'',
    photoURL:''
  }

  render(){

    let handleClick=(e)=>{
      e.preventDefault()
      let data={
        name:this.state.firstName+' '+this.state.lastName,
        url:this.state.photoURL,
        caption:this.state.caption
      }
      console.log(data)
      this.props.postMemes(data)
    }

    let inputChangeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const {classes} = this.props;
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <InsertEmoticonIcon color="white" className={classes.large}/>
          </Avatar>
          
          <Typography style={{fontWeight:"bold",textAlign:"center"}} component="h1" variant="h4">
              Post your Memes Here!
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={inputChangeHandler}
                  placeholder="Ex: Pratik"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={inputChangeHandler}
                  placeholder="Ex: Chaudhary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="caption"
                  label="Caption"
                  name="caption"
                  autoComplete="cp"
                  onChange={inputChangeHandler}
                  placeholder="Be innovative with meme caption"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="photoURL"
                  label="Photo URL"
                  id="phurl"
                  autoComplete="url"
                  onChange={inputChangeHandler}
                  placeholder="Ex: http://your-image-url.com"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleClick}
              style={{
                fontSize:"15px",
                fontWeight:"bold"
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <Error/>
      </Container>
    );
  }
  
}

Form.propTypes={
  classes:PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>{
  return{
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    postMemes:(data)=>dispatch(postApiCall(data)),
    reloadPage:()=>dispatch(getApiCall)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Form));
