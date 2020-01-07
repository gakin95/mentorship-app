import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import MessageList from './MessageList'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors'
import CommonButton from './CommonButton'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
    root : {
        height : '100%'
    },
    request : {
        backgroundColor : '#F5F5F5',
      },
    schedule : {
        paddingLeft: '6%',
        paddingTop : '6%'
    },
    incomingRequest : {
        paddingLeft: '6%',
        color: 'blue',
        paddingBottom: '2%'
    },
    purpleAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: deepPurple[500],
    },
    button :{
      display: 'flex',
      alignItems: 'center'
    }
  });
  

export default function IncomingRequest()  {
    const classes = useStyles();
    return (
      <MessageList >
        <Grid container className = {classes.root}>
         <Grid container className={classes.request}>
         <Grid xs = {12}>
         <Avatar className = {classes.purpleAvatar} ><NavigateBeforeIcon /></Avatar>
         </Grid>
         <Grid xs = {12} className = {classes.incomingRequest}>
            <h3>Incoming Request</h3>
         </Grid>
         </Grid>
         <Grid container className = {classes.schedule}>
         <Grid xs = {2}>
             <h4>Mentor :</h4>
         </Grid>
         <Grid xs = {8}>
             <h4>Mentor</h4>
         </Grid>
         <Grid xs = {2}>
             <CommonButton name='Reschedule' bgColor='blue' href="/"/>
         </Grid>
         <Grid xs = {2}>
             <h4>Topic :</h4>
         </Grid>
         <Grid xs = {8}>
             <h4>Rehabilitaing Nigerian Youths</h4>
         </Grid>
         <Grid xs = {2}>
             
         </Grid>
         <Grid xs = {2}>
             <h4>Notes :</h4>
         </Grid>
         <Grid xs = {8}>
             <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Id nisi ad ipsum illum voluptatum modi quo.
                  Incidunt magni unde est architecto tempora voluptate 
                  reprehenderit quos a provident? Nihil, fuga at?
              </h4>
         </Grid>
         <Grid xs = {2}>
             
         </Grid>
         <Grid xs = {2}>
             <h4>Time :</h4>
         </Grid>
         <Grid xs = {8}>
             <h4>3pm</h4>
         </Grid>
         <Grid xs = {2}>
             
         </Grid>
         <Grid xs = {2}>
             <h4>Date :</h4>
         </Grid>
         <Grid xs = {8}>
             <h4>31/10/2019</h4>
         </Grid>
         <Grid xs = {2}>
             
         </Grid>
         <Grid className = {classes.button}>
         <CommonButton 
          name='Reject'
          bgColor='white' 
          textColor='red' 
          border='1px solid red'
          href="/schedule"
           />
         <CommonButton
          name='Approve'
          href="/schedule"
          />
         </Grid>
         </Grid>
        </Grid>
      </MessageList>
    )
  }
  