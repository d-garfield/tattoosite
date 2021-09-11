
import React, { Component} from 'react'
import useStyles from './homeStyle'


const Artists = () =>{
    
    const classes = useStyles();
        return (
            <div>
        <div id="home" className={classes.home}>
          <h1>This is Home section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="about" style={{height: 500}}>
        <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="artists" style={{height: 500}}>
        
        </div>
        <div id="contact" style={{height: 500}}>
        <h1>This is Service section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
            </div>
        )
    
}

export default Artists
