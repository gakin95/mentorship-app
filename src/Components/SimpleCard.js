import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MaleUser from '../Maleuser.png';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';


const useStyles = makeStyles(theme =>({
  card: {
    maxWidth: 400,
    background: 'green',
    color:'#ffffff',
    [theme.breakpoints.down("sm")] : {
      margin: 10
    }
  },
  

  title: {
    fontSize: 14,
    color:'#ffffff'
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Grid container spacing={0}>
    <Grid  xs={12} md={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h6" gutterBottom>
          My mentor
        </Typography>
        <div style={{marginLeft: '61%'}}>
        <img src={MaleUser} alt=""/>
        <Typography variant="body2" component="p">
          Dr. Adekunle Olushola
          <br />
          {'Marriage Counselor'}
        </Typography>
        </div>
      </CardContent>
    </Card>
    </Grid>
    <Grid xs={12} md={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Available mentors
        </Typography>
        <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop: '42%',}}>
        <Typography variant="body2" component="p">
          03
        </Typography>
        <GroupIcon />
        </div>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}
