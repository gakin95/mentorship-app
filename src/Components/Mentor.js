import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import CommonButton from './CommonButton'
import Dashboard from './DashBoard';

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

function createData(ID, img, name, surname, year, skill,skills,status) {
  return { ID, img, name, surname, year, skill,skills,status };
}

  const rows = [
  createData(1, 'user.png', 'Gbenga', 'Akingbulere', '4yrs', 'Bussiness Management','Marketing','Active'),
  createData(2, 'Maleuser.png', 'Haruna','Ogweda','4yrs','Content Management','PR Public Relation','Invited'),
  createData(3,'FemaleUser.png','Florence', 'Ademeji', '4yrs', 'Customer Relation','Bussiness Model','Active'),
 
];

  export default class ViewRequestTable extends Component {

    constructor(props){
      super(props);
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);


      
    }




   handleChange =()=>{
    this.setState({
      checked: !this.state.checked
    })
  }
   

  render(){
    const classes = useStyles;
    const content = this.state.checked 
      ?<Grid container className={classes.margin} style={{justifyContent:'flex-end'}}>
      <CommonButton name='View Profile'  bgColor='blue' />
      <CommonButton name='Request Mentor' />
    </Grid>
      : null;


  return (
    <Dashboard name="Choose Mentor">
    <Paper style={{padding:'5%',weight:'100%'}}>
      <SearchIcon />
      <Input placeholder='Search by name'  type='search'/>
      <Table style={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Name</TableCell>
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
              <Checkbox type="checkbox" onChange={this.handleChange}  checked={this.state.checked}/>
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
          {
             content
          }
         </Paper>
    </Dashboard>
  );
    }

  }
