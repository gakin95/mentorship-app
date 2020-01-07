import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ImportExportSharpIcon from '@material-ui/icons/ImportExportSharp';
import Dashboard from './DashBoard'

 const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    padding:'5%'
  },
  table: {
    minWidth: 650,
  },
});

function createData(img, name, surname, year, skill,skills,status) {
  return { img, name, surname, year, skill,skills,status };
}

  const rows = [
    createData('user.png', 'Gbenga', 'Akingbulere', '4yrs', 'Bussiness Management','Marketing','Approved'),
    createData('Maleuser.png', 'Haruna','Ogweda','4yrs','Content Management','PR Public Relation','Rejected'),
    createData('FemaleUser.png','Florence', 'Ademeji', '4yrs', 'Customer Relation','Bussiness Model','Pending'),
 
];

  export default function MentorTable() {
  const classes = useStyles();

  return (
    <Dashboard name="Choose Mentor">
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Name<ImportExportSharpIcon/></TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Years of Exp</TableCell>
            <TableCell align="right">Skills</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <Checkbox value="checkedA" />
              </TableCell>
              <TableCell align="right">
                <Avatar src={require(`../${row.img}`)} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">
                <Button variant="contained" >{row.skill}</Button>&nbsp;
                <Button variant="contained" >{row.skills}</Button></TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Dashboard>
  );
}
