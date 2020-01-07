import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const StyledTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: '#b1b11f',
    // color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, surName, date, time,status,review ) {
  return { name, surName, date, time,status,review  };
}

const rows = [
  createData('user.png', 'Chukudi Titus', '24/05/2019', '3pm', 'Pending' ,'Review'),
  createData('FemaleUser.png', 'Adeola Adejare', '24/05/2019', '3pm', 'Declined'),
  createData('Maleuser.png', 'Kazeem Laniyan', '24/005/2019', '3pm', 'Success'),
  
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
}));

export default function RequestedScheduleTables() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">
                <Avatar src={require("../" + row.name)} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.surName}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right"><Button>{row.time}</Button></StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <TableCell align="right"> <Button style={{color:'green'}}
               className={classes.button} href='/inComingRequest'>{row.review}
               </Button></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
