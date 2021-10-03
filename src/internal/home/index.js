import React from "react";
import {useStyles} from "./style"
import {Main} from "./style.js";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Header} from "../../pages/header/header";
import Card from "@material-ui/core/Card";
import NavBarAdmin from "../components/NavMenuAdmin";

function Home (){

    const classes = useStyles();

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBarAdmin />
                        <Card className={classes.card}>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );
}

export {Home}