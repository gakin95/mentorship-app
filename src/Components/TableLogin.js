import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'green',
    color: theme.palette.common.white,
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

function createData(name, surName, date, time, status) {
  return { name, surName, date, time, status };
}

const rows = [
  createData('Maleuser.png', 'Chukudi Titus', '24/05/2019', '3pm', 'Pending'),
  createData('FemaleUser.png', 'Adeola Adejare', '24/05/2019', '3pm', 'Pending'),
  createData('user.png', 'Kazeem Laniyan', '24/005/2019', '3pm', 'Pending'),
  
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '83%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
}));

export default function TableLogin() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Schedule</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">View All</StyledTableCell>
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
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
