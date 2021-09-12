import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardActionArea,
  IconButton
} from "@material-ui/core/";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import artist1 from '../../assets/tattooshop.jpg'
import useStyles from './mediacardstyle'


export default function MediaCard() {
  const classes = useStyles();
  const data = {
    artist: [
      { name: 'John Doe', photo: artist1, insta:'https://www.instagram.com/deansleiman/', email:''},
      { name: 'Jane Doe', photo: artist1, insta:'https://www.instagram.com/jessydufourtattoos/',email:''},
      { name: 'Johan Doe', photo: artist1, insta:'https://www.instagram.com/timmytwotones/',email:''},
      { name: 'Jon Doe', photo: artist1, insta:'https://www.instagram.com/kayaklyn/',email:'' },
      { name: 'Joseph Doe', photo: artist1, insta:'https://www.instagram.com/jaworski_13/',email:''},
      { name: 'Jorge Doe', photo: artist1, insta:'https://www.instagram.com/jwhitemailloux/' ,email:''},
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
                        <CardMedia className={classes.media} image={artist.photo}/>

                        <CardHeader title={artist.name}/>
                    </CardActionArea>
                        <CardActions style={{justifyContent: 'center'}}>
                            <IconButton href={artist.email}>
                                <EmailIcon color="primary">
                                    Share
                                </EmailIcon>
                            </IconButton>
                            <IconButton href={artist.insta}>
                                <InstagramIcon color="primary">
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