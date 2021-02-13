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
import {dateParser} from './dateParser';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import IconButton from '@material-ui/core/IconButton';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

class App extends Component {

  componentDidMount(){
    this.props.getMemes()
  }

  render(){
    // console.log(this.props)

    // let scrollToBottom=()=>{
    //   this.appp.scrollIntoView({ behavior: "smooth" })
    // }

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
          <Grid key={meme.id} style={{display:show,justifyContent:"center",marginBottom:"20px"}} item xs={12} sm={12} md={6} lg={4}>
              <Card name={meme.name} caption={meme.caption} picurl={meme.url} id={meme.id} time={dateParser(meme.date)}/>
          </Grid>
      )
      
    })

    return (
      <div  className="App">


        
        <Backdrop style={{zIndex:100,color:"#fff"}} open={this.props.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Navbar/>

        <Grid container>
          <Grid  style={{display:'flex',justifyContent:"center",alignItems:"center",borderRight:"3px groove grey"}} item xs={12} sm={12} md={12} lg={4}>
            <div >
              <Form/>
            </div>
          </Grid>
           {/* {<Divider orientation="vertical"/>} */}
          <Grid item xs={12} sm={12} md={12} lg={8}>
            
            
            <div style={{position:"relative",width:"100%",height:"90vh",overflow:"scroll"}}>
              <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
                <Typography style={{fontWeight:"bold"}} component="h1" variant="h4">
                    Memes
                </Typography>
              </div>
              <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
                <Search/>
              </div>
              <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
                <Pages/>
              </div>
              {!bool?<Fragment>
                <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"20px"}}>
                    <SentimentDissatisfiedIcon style={{width:"80px",height:"80px"}}/>
                    <Typography style={{fontWeight:"bold",fontSize:"20px"}}>
                      No memes to show on this page! Add Memes Now!
                    </Typography>
              
                </div>
                </Fragment>:
                <Fragment>
                <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
                  <Grid container style={{marginTop:"40px",maxWidth:"1500px"}}>
                    {this.props.memes.length===0?<Fragment>
                      <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"20px"}}>
                        <SentimentVeryDissatisfiedIcon style={{width:"80px",height:"80px"}}/>
                        <Typography style={{fontWeight:"bold",fontSize:"20px"}}>
                          You haven't added any meme yet!
                        </Typography>
                
                      </div>
                    </Fragment>:memeCards}
                  </Grid>
                </div>
                </Fragment>
                }
                <div style={{display:'flex',justifyContent:"center",margin:"20px"}}>
                  <Pages ref={ele=>this.appp=ele}/>
                </div>
            </div>
          </Grid>
        </Grid>

        
       
        

        {/* <div style={{position:'fixed',bottom:"4vh",right:"1vw"}}>
          <IconButton onClick={scrollToBottom} >
            <ArrowDropDownCircleIcon style={{width:"45px",height:"45px",color:"black"}} />
          </IconButton>
        </div> */}
       
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
