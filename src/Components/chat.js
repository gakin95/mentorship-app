import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import MessageList from './MessageList'
import user from '../FemaleUser.png'
import Avatar from '@material-ui/core/Avatar'
import PhoneIcon from '@material-ui/icons/Phone'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const BootstrapInput = withStyles(theme => ({
  root: {
    
    'label + &': {
      marginTop: theme.spacing(6),
    },
  },
  input: {
    borderRadius: 22,
    position: 'relative',
    backgroundColor: '#F5F5F5',
    border: '1px solid #ced4da',
    // width : '605px',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root : {
    backgroundColor : '#F5F5F5',
    height : '100%',
    
  },
  menteeNav : {
    display: 'flex',
    alignItems: 'center'
  },
  menteeNavContainer : {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FCFFFD'
  },

  send : {
    background: 'white',
    border: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center' 
  },

  sendMessage : {
    color : 'black',
    backgroundColor: 'white',
    padding: '13px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    display: 'inline-block',
    minWidth: '21%',
    maxWidth: '50%',
    marginLeft : '1%'
  },

  replyMessage : {
    float: 'right',
    color : 'white',
    backgroundColor: 'green',
    padding: '13px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    display: 'inline-block',
    minWidth: '21%',
    maxWidth: '50%',
    marginRight : '1%'
  },

}) );

export default function Message()  {
  const classes = useStyles();
  return (
    <MessageList >
      <Grid container className = {classes.root} >
      <Grid container className = {classes.menteeNavContainer}>
        <Grid xs = {11}>
        <Grid container className = {classes.menteeNav}>
          <Grid xs = {2}>
        <Avatar src={user} alt="" style ={{marginLeft :'20px'}}/>
        </Grid>
        <Grid xs = {10}>
        <h3>Mary Martins</h3>
        <p>mentee</p>
        </Grid>
        </Grid>
        </Grid>
        <Grid xs = {1}>
        <PhoneIcon />
        </Grid>
        </Grid>
        <Grid xs = {12}>
          <h3 className = {classes.sendMessage}>Hi </h3>
        </Grid>
        <Grid xs = {12}>
          <h3 className = {classes.replyMessage}>Good morning ma!</h3>
        </Grid>
        <Grid xs = {12}>
          <h3 className = {classes.sendMessage}>How are you doing today Mike?</h3>
        </Grid>
        <Grid xs = {12}>
          <h3 className = {classes.replyMessage}>I'm fine, how may i help you please</h3>
        </Grid>
        <Grid container className = {classes.send}>
          <Grid xs = {1}>
            <AddIcon style ={{marginLeft :'13%'}}/>
          </Grid>
        <Grid xs={9}>
        <FormControl style={{width:'100%'}}>
            <BootstrapInput id="age-customized-input"
            placeholder='Type a message'  />
        </FormControl>
        </Grid>
        <Grid xs = {1}>
            <AddAPhotoIcon style ={{marginLeft :'13%'}}/>
        </Grid>
         <Grid xs = {1}>
         <Box m={2} >
         <Badge badgeContent={1} color="secondary">
        <Link href='/schedule'>
          <DateRangeIcon style ={{marginRight :'20%'}}/>
        </Link>
        </Badge>
        </Box>
          </Grid>
        </Grid>
      </Grid>
    </MessageList>
  )
}
