import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
//Cards
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import TextField from '@material-ui/core/TextField';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import {connect} from 'react-redux'
import {deleteApiCall} from '../Redux/actionsDispatchers/deleteCall'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    minWidth:350
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);





function MemeCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpenForm = () => {
    setOpen2(true);
  };

  const handleCloseForm = () => {
    setOpen2(false);
  };

  const handleClickOpenPic = () => {
    setOpen(true);
  };
  const handleClosePic = () => {
    setOpen(false);
  };

  let handleClick=(e)=>{
    e.preventDefault()
    props.deleteMemes(props.id)
  }

  return (
    <div>
      <Dialog onClose={handleClosePic} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClosePic}>
          {props.caption}
        </DialogTitle>
        <DialogContent dividers>
          <img src={props.picurl} style={{objectFit:'scale-down',maxWidth:"40vh",maxHeight:"50vh"}} />
        </DialogContent>
        <DialogActions>
          <Typography gutterBottom>
              <strong>@{props.name}</strong>
          </Typography>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Memes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update your Memes Here, partial update is allowed.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            disabled
            fullWidth
            value={props.name}
          />

          <TextField
            autoFocus
            margin="dense"
            id="caption"
            label="Caption"
            type="caption"
            fullWidth
            placeholder="Be innovative with caption"
            value={props.caption}
          />

          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Meme URL"
            type="name"
            fullWidth
            placeholder="Ex: http://your-meme-url.com"
            value={props.picurl}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseForm} color="info">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name.slice(0,2)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        // subheader="September 14, 2016"
        subheader={`${props.time.month} ${props.time.date}, ${props.time.year}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.caption}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={props.picurl}
        style={{objectFit:'contain'}}
        onClick={handleClickOpenPic}
      />
      
      <CardActions disableSpacing>
        <IconButton onClick={handleClickOpenForm} aria-label="add to favorites">
          <EditTwoToneIcon/>
        </IconButton>
        <IconButton onClick={handleClick} aria-label="share">
          <DeleteTwoToneIcon/>
        </IconButton>
      </CardActions>
      
     </Card>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    loading:state.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    deleteMemes:(id)=>dispatch(deleteApiCall(id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemeCard);