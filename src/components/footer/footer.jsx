import React from "react";
import { Container,  Grid, Box, Link } from "@material-ui/core";
import useStyles from './footerstyle'


export default function Footer() {

    const classes = useStyles();

    return(
        <div>
            <Box>
                <Container maxWidth='xl' className={classes.footerbase}>
                    <Grid containerSpacing={5}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link color='black' href='/'>Please</Link>
                            </Box>
                            <Box>
                                <Link color='black' href='/'>Please</Link>
                            </Box>
                            <Box>
                                <Link color='black' href='/'>Please</Link>
                            </Box>
                            <Box>
                                <Link color='black' href='/'>Please</Link>
                            </Box>
                            <Box>
                                <Link color='black' href='/'>Please</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )

}