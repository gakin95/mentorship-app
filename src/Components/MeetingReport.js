import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import DashBoard from './DashBoard'

const useStyles = makeStyles(theme => ({
  root: {
    width: '75',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

  function createData(name, mentor, date, time, status,report) {
  return { name, mentor, date, time, status,report };
}

  const rows = [
  createData('user.png','Chukudi Titus' ,'24/05/2019', '3pm', 'Succesful', 'Give a report'),
  
];

  export default function MeetingReport() {
  const classes = useStyles();

  return (
    <DashBoard name='Report'>
    <Paper className={classes.root}>
        <h3 style={{margin:'39px'}}>Select Meeting</h3>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Mentor</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Meeting Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Avatar src={require(`../${row.name}`)} />
              </TableCell>
              <TableCell align="right">{row.mentor}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right"> <Button color="primary"
               className={classes.button}>{row.status}
               </Button></TableCell>
               <TableCell align="right"> <Button style={{color:'green'}}
               className={classes.button} href="/report">{row.report}
               </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </DashBoard>
  );
}
