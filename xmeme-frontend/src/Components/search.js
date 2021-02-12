import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { withStyles } from '@material-ui/styles';
import {connect} from 'react-redux'
import {searchMemeCall} from '../Redux/actionsDispatchers/searchCall'

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 800,
  },
  input: {
    marginLeft: "10px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class CustomizedInputBase extends Component {
  
  state={
    text:''
  }

  render(){
    const {classes} = this.props;

    let changeHandler=(e)=>{
      e.preventDefault();
      this.setState({
        text:e.target.value
      })
    }

    let clickHandler=(e)=>{
      e.preventDefault();
      this.props.searchMeme(this.state.text)
    }

    return (
      <Paper elevation={5} component="form" className={classes.root}>
        
        <InputBase
          className={classes.input}
          placeholder="Search authors or captions..."
          name="search"
          label="Search Memes"
          onChange={changeHandler}
        />
        <IconButton type="submit" onClick={clickHandler} className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
  
}

const mapStateToProps = (state) =>{
  return{
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    searchMeme: (text)=> dispatch(searchMemeCall(text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CustomizedInputBase));
