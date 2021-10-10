
import { Typography } from '@material-ui/core';
import React, { Component} from 'react'
import useStyles from './homeStyle'
import MediaCard from '../components/mediacard/mediacard'


const Artists = () =>{
    
    const classes = useStyles();
        return (
          
            <div>
              <div id="home" className={classes.home} >
              
              
                <div id="homeimage" className={classes.homeimage} />

                <div className={classes.homecontent}>
                  <Typography className={classes.subtitle} variant='h2'>Tattoo Shop Example</Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                  et consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </div>

              </div>

            
              <div id="artists" className={classes.artistimage}/>
                <Typography className={classes.altsub} variant='h2'>Artists</Typography>
                <hr className={classes.divider}/>
                <Typography className={classes.underhead} variant='h6'>For Inquiries</Typography>
              <MediaCard/>
             

             <div id="contact" className={classes.contact}style={{height: 800}} >
             <Typography className={classes.subtitle} variant='h2'>Information</Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                  et consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.

          

        </div>

            </div>
        )
    
}

export default Artists
