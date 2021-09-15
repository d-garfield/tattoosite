import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardHeader,
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


export default function MediaCard() {
  const classes = useStyles();
  const data = {
    artist: [
      { name: 'John Doe', photo: imgArr[0], artwork: imgArr[1], insta:'https://www.instagram.com/deansleiman/', email:'', contact:'DM on Instagram'},
      { name: 'Johan Doe', photo: imgArr[2], insta:'https://www.instagram.com/timmytwotones/',email:'', contact:'Email'},
      { name: 'Jon Doe', photo: imgArr[4], insta:'https://www.instagram.com/kayaklyn/',email:'', contact:'DM on Instagram'} ,
      { name: 'Joseph Doe', photo: artist1, insta:'https://www.instagram.com/jaworski_13/',email:'', contact:'Email'},
      { name: 'Jorge Doe', photo: artist1, insta:'https://www.instagram.com/jwhitemailloux/' ,email:'', contact:'Email'},
    ],
    id: [1]
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
                    <CardActionArea className={classes.AA}>
                        <CardMedia className={classes.media} image={artist.photo}>

                          <CardHeader title={artist.name} className={classes.artistname}/>

                          <Typography className={classes.artistinfo}>
                            BOOKS OPEN
                          </Typography>
                          <Typography className={classes.artistinfo}>
                            {artist.contact} to book
                          </Typography>


                        </CardMedia>


                        
                    </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
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