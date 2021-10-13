import React from "react";
import { Container,  Grid, Box, IconButton, Typography } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from './footerstyle'


export default function Footer() {

    const classes = useStyles();

    return(
        <div>
            <Box className={classes.footerwrapper}>
                <Container maxWidth='xl' className={classes.footer}>
                    
                        <Grid>
                            <Box padding='5px' className={classes.footertext}>Tattoo Shop Example™</Box>
                            
                                <Typography className={classes.footertext}>1233 Examplars Drive</Typography>
                           
                           
                            <Typography className={classes.footertext}>Example, Ontario</Typography>
                           
                           <IconButton href={'https://www.instagram.com/'}>
                            <InstagramIcon className={classes.footericon} >
                                    Learn More
                            </InstagramIcon>
                           </IconButton>
                           <IconButton href={'https://www.facebook.com/'}>
                            <FacebookIcon className={classes.footericon}>
                                    Learn More
                            </FacebookIcon>
                            </IconButton>
                        </Grid>
                        
                       
                            
            
                </Container>
                
            </Box>
        </div>
    )

}