import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import user from '../FemaleUser.png'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  card: {
    width: '300px',
    borderRadius:'4px',
    
    
    
    background:'hsl(144, 100%, 36%)',
    color:'white'
  },
 
  title: {
    fontSize: 14,
    color:'white'
  },
  pos: {
    marginTop: '15px',
  },
  flexx:{
      alignItems:'center',
      paddingBottom:'6px'
  },
  name:{
    marginLeft: '49px'
  },
  action:{
      marginTop:'-16px'
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = ()=>{
    setOpen(prev => !prev);
    console.log('im clicked')
  };


  return (
    <div>
      
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <Grid container className={classes.flexx}>
            <Grid xs={3}>
              <img src={user}  style={{width:'141%'}} alt=""/>
            </Grid>
            <Grid xs={9}>
              <div className={classes.name}>
                <h3>Gbemisola Olutoye</h3>
                <p>olutoye@gmail.com</p>
              </div>
            </Grid>
          </Grid>
        </Typography>
        <Divider variant="middle" style={{background:'white'}} />
        <Typography variant="p" component="p" className={classes.pos}>
         Membership NO : 01234456789
        </Typography>
      </CardContent>
      <CardActions>
      <Grid container className={classes.action}>
      <Button color="inherit">Update Profile</Button>
      <Button color="inherit">Change Password</Button>
      <Grid xs={12}>
      <Button color="inherit">Log Out</Button>
      </Grid>
      </Grid>
      </CardActions>
    </Card> 
    </div> 
  );
}
