import React from 'react';
import {useState} from 'react';
import useStyles from './drawerstyle'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-scroll'
import {Box} from '@material-ui/core'

 


function SwipeableTemporaryDrawer(){
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return(
    <div className={classes.drawer}>
      <IconButton edge='start' color='red' aria-label='open drawer' onClick={()=>setOpen(true)}>
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer anchor='left' open={open} onClose={()=>setOpen(false)} onOpen={()=>{}} disableRestoreFocus>
        <div>
          
          <List>
            <ListItem button onClick={()=>{}}>
            <Link  className={classes.listItem} to="home" spy={true} smooth={true}>Home</Link>
            </ListItem>
            <Divider/>
            <ListItem button onClick={()=>{}}>
            <Link  className={classes.listItem} to="artists" spy={true} smooth={true}>Artists</Link>
            </ListItem>
            <Divider/>
            <ListItem button onClick={()=>{}}>
            <Link  className={classes.listItem} to="contact" spy={true} smooth={true}>Contact</Link>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default SwipeableTemporaryDrawer