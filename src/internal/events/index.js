import React from "react";
import {useStyles} from "./style"
import {Main} from "./style.js";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Header} from "../../pages/header/header";
import Card from "@material-ui/core/Card";
import NavBarAdmin from "../components/NavMenuAdmin";
import { CreateEvent } from "./createEvent";
import { Grid } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import { Backdrop } from "@mui/material";
import { ListEvent } from "./listEvents";

export function EventRegister() {

    const classes = useStyles();

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBarAdmin />
                        <Card className={classes.card} sx={{direction:"column", justifyContent:"flex-start", padding: 4, minHeight:500}}>
                            <Box width="100%" >
                            <Grid container flex="1" justifyContent="space-between">
                                <Grid item xs={9.5}>
                                    <ListEvent></ListEvent>
                                </Grid>
                                <Grid item xs={2}>
                                    <CreateEvent></CreateEvent>
                                </Grid>
                            </Grid>
                            </Box>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );

}
