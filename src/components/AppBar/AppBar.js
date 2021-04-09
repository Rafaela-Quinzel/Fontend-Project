import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { logout } from '../../routes/coordinator'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  powerIcon: {
    cursor: 'pointer',
    marginLeft: 40,
  },
  title: {
    flexGrow: 1,
    display: '',
    marginRight: 30
  },
  titleNameUser: {
    flexGrow: 1,
    display: '',
    width: '85%',
    marginRight: 40
  }
}))


export default function SearchAppBar() {

  const history = useHistory()
  const classes = useStyles()

  const username = window.localStorage.getItem("username")


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.titleNameUser}
            align={'left'}
            variant="h6"
            noWrap
          >
            Olá {username}!
          </Typography>

          <PowerSettingsNewIcon
            className={classes.powerIcon}
            onClick={() => logout(history)}
            fontSize={'small'}
            align={'right'} />
          <Typography
            className={classes.title}
            align={'right'}
            noWrap >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}