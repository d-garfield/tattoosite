import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Button, MenuItem, Menu, Typography,useMediaQuery, useTheme} from '@material-ui/core';
import logo from '../../assets/better_days.PNG'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './nav_style'
import {Link} from 'react-scroll'



const Navbar = () => {
    const classes = useStyles();


    
    return (


        
        <div>
          
          {/*Site Icon and mobile menu links*/}
        <AppBar  className={classes.appBar} position="static">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Better_Days" height="25px" className={classes.image}/>
                    </Typography>
           
              <div>
               
              </div>

              {/*Links to be shown when not in mobile*/}
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
       
    )
}

export default Navbar
