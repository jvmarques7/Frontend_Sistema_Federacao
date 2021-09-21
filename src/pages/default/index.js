import React from "react";
import {useStyles} from "./style"
import {Main, Image} from "./style.js";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Header} from "../header/header";
import NavBar, { Page } from "../../components/navBar/style"
import Card from "@material-ui/core/Card";
import CustomizedTables from '../../components/Table/index.js'
//import { Link } from 'react-router-dom';

function Default (){

    const classes = useStyles();

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBar />
                        <Card className={classes.card}>
                            <CustomizedTables>

                            </CustomizedTables>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );

}

export default Default;

{/* <NavBar /> */}
                        {/* <Card className={classes.card}>
                            <AreaAtleta></AreaAtleta>
                        </Card> */}