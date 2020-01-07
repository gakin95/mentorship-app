import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CommonButton from './CommonButton'
import CibnLogo from '../CibnLogo.png';
import TransitionsModal from './Button'
import FormDialog from './FormDialog'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#00b84a'
  },
  img: {
      width : 45
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { showButton } = props;


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
            <img className={classes.img} src={CibnLogo} alt=""/>
          <Typography variant="h6" className={classes.title}>
            CIBN-MENTUP
          </Typography>
          {showButton && (
            <React.Fragment>
                <FormDialog />
                <CommonButton name='LOGIN' href="/login"/>
            </React.Fragment>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.defaultProps = {
    showButton: false
}