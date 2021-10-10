import React from "react";
import { useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  IconButton,
  Typography
} from "@material-ui/core/";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import artist1 from '../../assets/tattooshop.jpg'
import useStyles from './mediacardstyle'
import { imgArr } from "../../assets/images";




export default function MediaCard(props) {
  const classes = useStyles();
  const [newData,setData] = useState([]);
  const data = {
    artist: [
      { name: 'John Doe', photo: [imgArr[0], imgArr[1]], insta:'https://www.instagram.com/', email:'mailto:derek.oquinn.wd@outlook.com', books:'OPEN', contact:'Instagram'},
      { name: 'Johan Doe', photo:[imgArr[2], imgArr[3]], insta:'https://www.instagram.com/',email:'mailto:derek.oquinn.wd@outlook.com', books:'OPEN', contact:'Email'},
      { name: 'Jon Doe', photo: [imgArr[4], imgArr[5]], insta:'https://www.instagram.com/',email:'mailto:derek.oquinn.wd@outlook.com',books:'OPEN', contact:'Instagram'} ,
      { name: 'Joseph Doe', photo: [imgArr[6], imgArr[7]],insta:'https://www.instagram.com/jaworski_13/',email:'mailto:derek.oquinn.wd@outlook.com', contact:'Email'},
      { name: 'Jorge Doe', photo: [imgArr[8], imgArr[9]],insta:'https://www.instagram.com/jwhitemailloux/' ,email:'mailto:derek.oquinn.wd@outlook.com', contact:'Email'},
    ],
    id: [1]
  };

  

  function onClick(){
    console.log("** onClick **");
    

  };


  return (
    <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {data.artist.map((artist) => (
            <Grid item xs={12} sm={6} md={4}key={data.artist.indexOf(artist)}>
                

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia id="picID"className={classes.media} image={artist.photo[0]} onClick={onClick}/>

                          <Typography className={classes.artistname}>{artist.name}</Typography>

                          {/*Text to be toggled when hovered over*/}
                          


                        


                        
                    </CardActionArea>

                    {/*Icons at the bottom of the cards*/}

                        <CardActions style={{justifyContent: 'center'}} className={classes.cardbottom}>
                        <Typography className={classes.artistinfo}>
                            
                          </Typography>
                            <IconButton href={artist.email}>
                                <EmailIcon className={classes.emailicon}>
                                    Share
                                </EmailIcon>
                            </IconButton>
                            <IconButton href={artist.insta}>
                                <InstagramIcon className={classes.instaicon}>
                                    Learn More
                                </InstagramIcon>
                            </IconButton>
                        </CardActions>
                </Card>
                
            </Grid>
          ))}
        </Grid>
      
    </div>
  );
}