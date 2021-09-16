
import { Typography } from '@material-ui/core';
import React, { Component} from 'react'
import useStyles from './homeStyle'
import MediaCard from '../components/mediacard/mediacard'


const Artists = () =>{
    
    const classes = useStyles();
        return (
            <div>
        <div id="home" className={classes.home}style={{height: 800}} >
        
        
          <div id="homeimage" className={classes.homeimage} />
          <div className={classes.homecontent}>
          <Typography className={classes.subtitle} variant='h2'>This is Home section</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          et consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
         </div>
          </div>
        <div id="about" style={{height: 500}}>
        <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="artists" style={{height: 1200}}>
            <h1>Artists</h1>
        <MediaCard/>
        
        </div>
            </div>
        )
    
}

export default Artists
