import React from "react";
import { Container,  Grid, Box, Link, Typography } from "@material-ui/core";
import useStyles from './footerstyle'


export default function Footer() {

    const classes = useStyles();

    return(
        <div>
            <Box>
                <Container maxWidth='xl' className={classes.footerwrapper}>
                    <Grid containerSpacing={6} >
                        <Grid className={classes.footertext}>
                            <Box borderBottom={1} padding='10px'>Better Days Tattoo</Box>
                            <Box>
                                <Typography className={classes.footertext}>5897 Tecumseh Road East</Typography>
                            </Box>
                            <Box>
                            <Typography className={classes.footertext}>Windsor, Ontario</Typography>
                            </Box>
                        </Grid>
                        <Grid>
                            <Box>
                            <Typography className={classes.footertext}>oquinn © 2021</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )

}