import React,{Component} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {connect} from 'react-redux'
import {getPageCall} from '../Redux/actionsDispatchers/paginationCall'
import {getApiCall} from '../Redux/actionsDispatchers/getCalls'

class PaginationOutlined extends Component{

  render(){
    let handleChange=(event,value)=>{
        this.props.getNewPage(value)
        this.props.reloadPage()
    }
    return (
      <div style={{margin:"50px"}}>
        <Pagination
          page={this.props.page} 
          count={Math.ceil(this.props.count/6)} 
          variant="outlined" 
          color="secondary" 
          onChange={handleChange}
          />
      </div>
    );
  }
  
}

const mapStateToProps = (state) =>{
  return{
    page:state.page,
    count:state.count
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getNewPage:(page_number)=>dispatch(getPageCall(page_number)),
    reloadPage:()=>dispatch(getApiCall())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationOutlined);