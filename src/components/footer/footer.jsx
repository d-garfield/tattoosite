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
                            <Box padding='5px' className={classes.footertext}>Better Days Tattoo™</Box>
                            
                                <Typography className={classes.footertext}>5897 Tecumseh Road East</Typography>
                           
                           
                            <Typography className={classes.footertext}>Windsor, Ontario</Typography>
                           
                           <IconButton href={'https://www.instagram.com/betterdays.tattoo/'}>
                            <InstagramIcon className={classes.footericon} >
                                    Learn More
                            </InstagramIcon>
                           </IconButton>
                           <IconButton href={'https://www.facebook.com/Better-Days-Tattoo-189027398433/?ref=page_internal'}>
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