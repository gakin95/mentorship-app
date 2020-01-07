import React, { Component } from 'react'
import MiniDrawer from './DashBoard'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BorderLinearProgress from './Progress'
import SimpleCard from './SimpleCard'
import TableLogin from './TableLogin'

  export default function Tita() {
    return (
     <MiniDrawer>
    <Typography paragraph>
         <BorderLinearProgress />
    </Typography>
    <Typography paragraph flex>
      <SimpleCard />
    </Typography>
    <Typography paragraph>
      <TableLogin />
    </Typography>
     </MiniDrawer>
    )
  }

