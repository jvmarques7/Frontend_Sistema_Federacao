import React from "react";
import { Container, Box, Card} from '@material-ui/core';
import FullWidthGrid from './form/form';
import { Header } from "../header/header";
import NavBar from "../../components/navBar/style";
import { component } from "../../components/anotherComponents";
import { Main } from "../../components/anotherComponents.js";

export function AreaAtleta(){

    const classes = component();

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBar />
                        <Card className={classes.card}>
                            <FullWidthGrid></FullWidthGrid>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );

  }