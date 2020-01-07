import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CommonButton from './CommonButton'
import Paper from '@material-ui/core/Paper';
import pic from '../pic.png'


  
const useStyles = makeStyles(theme => ({
  Container: {
    backgroundImage: `url(${pic})`,
    width:'100%',
    height:'90vh',
    backgroundSize:'cover',
    bottom:0,
    color:'white',
    textAlign:'center',
    fontSize:'40px',
    fontWeight  :"bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    '& p': {
      color: 'white',
      marginTop:'5vh',
      marginBottom:'5vh',
      fontWeight  :"bold",
      fontSize:'40px'
    },
  },

}));



export default function Background() {
  const classes = useStyles();
  return(
    <div className={classes.Container}>
      <paper  >
      <Typography variant="h3" align="center">
        Welcome !
      </Typography>
      <Typography component="p" align="center" >
        Chartered Institute Of Bankers Of Nigeria
      </Typography>
      </paper> 
      <CommonButton name='MENTORING APP' bgColor='#5B2517' href="/"/>         
    </div>
  )
}


