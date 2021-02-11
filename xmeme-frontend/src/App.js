import React, {Component ,Fragment} from 'react';
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
import {dateParser} from './dateParser'


class App extends Component {

  componentDidMount(){
    this.props.getMemes()
  }

  render(){
    // console.log(this.props)
    const {memes}=this.props;
    let bool=false;
    const memeCards=memes.map((meme)=>{

      let text=this.props.search
      let show='none'
      let x=text.length
      if(x!==0){
          if(meme.name.slice(0,x)===text || meme.caption.slice(0,x)===text){
            show='flex'
            bool=true;
          }
      }else{
        show='flex'
        bool=true;
      }

      return(
          <Grid key={meme.id} style={{display:show,justifyContent:"center",marginBottom:"25px"}} item xs={12} sm={12} md={6} lg={4}>
              <Card name={meme.name} caption={meme.caption} picurl={meme.url} id={meme.id} time={dateParser(meme.date)}/>
          </Grid>
      )
      
    })

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
        {!bool?<Fragment>
          <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
            No memes to show on this page!
          </div>
        </Fragment>:
        <Fragment>
          <Grid container style={{marginTop:"80px"}}>
            {memeCards}
          </Grid>
        </Fragment>
        }
        
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
    loading:state.loading,
    search:state.search
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getMemes:()=>dispatch(getApiCall())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
