import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color={"secondary"}>
          <Toolbar>
            <Typography style={{paddingLeft:"3%",fontWeight:"bold"}} variant="h5">XMEME</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ElevationScroll>
      <AppBar position="fixed" color="primary" style={{top:'auto',bottom:0}} >
        <div style={{display:'flex',justifyContent:'center'}}>
            <Typography style={{textAlign:"center",fontWeight:"bold",color:"white",fontSize:"13px"}}>
                Designed by @ <a style={{textDecoration:'none',color:"white",fontStyle:'italic'}} href="https://github.com/pratik0204">Pratik Chaudhary</a> under <a href="https://www.crio.do/" style={{textDecoration:'none',color:"white",fontStyle:'italic'}}>Crio.do</a>
            </Typography>
        </div>

      </AppBar>
      </ElevationScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
