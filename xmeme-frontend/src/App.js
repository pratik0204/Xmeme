import React, {Component } from 'react';
import Navbar from './Components/navbar'
import Search from './Components/search'
import Form from './Components/postForm'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from './Components/card'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {getApiCall} from './Redux/actionsDispatchers/getCalls' 
import Pages from './Components/pages'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {

  componentDidMount(){
    this.props.getMemes()
  }

  render(){
    // console.log(this.props)
    const {memes}=this.props;

    const memeCards=memes.map((meme)=>(
      <Grid key={meme.id} style={{display:'flex',justifyContent:"center",marginBottom:"25px"}} item xs={12} sm={12} md={6} lg={4}>
          <Card name={meme.name} caption={meme.caption} picurl={meme.url} id={meme.id}/>
      </Grid>
    ))

    return (
      <div className="App">
        <Backdrop style={{zIndex:100,color:"#fff"}} open={this.props.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Navbar/>
        <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
          <Form/>
        </div>
        <Divider variant="middle" />
        <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
          <Typography component="h1" variant="h4">
              Memes
          </Typography>
        </div>
        
        <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
          <Search/>
        </div>
        <Grid container style={{marginTop:"80px"}}>
          {memeCards}  
        </Grid>
        <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
          <Pages/>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    memes:state.memes,
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getMemes:()=>dispatch(getApiCall())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
