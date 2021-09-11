import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Button, MenuItem, Menu, Typography,useMediaQuery, useTheme} from '@material-ui/core';
import logo from '../../assets/better_days.PNG'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './nav_style'
import {Link} from 'react-scroll'

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event =>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }


    
    return (

        <div>
        <AppBar  className={classes.appBar} position="static">
          <Toolbar>
            <IconButton aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Better_Days" height="25px" className={classes.image}/>
                    </Typography>
           
              <div>
                <Menu 
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem className={classes.MenuItem} onClick={() => handleClose('/')}>Home</MenuItem>
                  <MenuItem className={classes.MenuItem} onClick={() => handleClose('/artists')}>Artists</MenuItem>
                  <MenuItem className={classes.MenuItem} onClick={() => handleClose('/contact')}>Contact</MenuItem>
                </Menu>
              </div>
              <div>
                <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                  <li><Link  className={classes.listItem} to="about" spy={true} smooth={true}>About</Link></li>
                  <li><Link  className={classes.listItem} to="artists" spy={true} smooth={true}>Artists</Link></li>
                  <li><Link  className={classes.listItem} to="contact" spy={true} smooth={true}>Contact</Link></li>
                </ul>
        
              </div>
            
          </Toolbar>
        </AppBar>
      </div>
       /* <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>*/
    )
}

export default Navbar
