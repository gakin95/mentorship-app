import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MaleUser from '../Maleuser.png';
import FemaleUser from '../FemaleUser.png';
import user from '../user.png';
import baby from '../baby.png'
import { Grid } from '@material-ui/core';
import Dashboard from "./DashBoard";




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: 'hsl(0, 0%, 65%)',
    height: '88vh'
  },
  inline: {
    display: 'inline',
  },
  mes: {
    backgroundColor: theme.palette.background.paper,
    // width : '100%',
    // // height: '88vh'
  },
  mesgrid:{
    marginLeft: '-22px',
    backgroundColor: theme.palette.background.paper,
    margintop: '-10px'
  }
}));

  export default function MessageList(props) {
  const classes = useStyles();

  return (
    <Dashboard name='Schedule'>
      <Grid container className={classes.mesgrid}>
          <Grid xs={3} lg={3}>
    <List className={classes.root}>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={MaleUser} />
        </ListItemAvatar>
        <ListItemText 
          primary="Mike Chinelolo"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={FemaleUser} />
        </ListItemAvatar>
        <ListItemText
          primary="Mary Martin"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy " src={user} />
        </ListItemAvatar>
        <ListItemText
          primary="Johnson Agu"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={baby} />
        </ListItemAvatar>
        <ListItemText
          primary="Femi Femo"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={MaleUser} />
        </ListItemAvatar>
        <ListItemText
          primary="Haruna Ogweda"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={FemaleUser} />
        </ListItemAvatar>
        <ListItemText
          primary="Gbenga Akin"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={user} />
        </ListItemAvatar>
        <ListItemText
          primary="Mike Adegboye"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </Grid>
    <Grid xs={9} lg={9} className={classes.mes} >
    {props.children}
    </Grid>
    </Grid>
    </Dashboard>
  );
}
