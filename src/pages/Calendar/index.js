import { Container, Box, Card, /*Button, Grid*/ } from "@mui/material";
import React from "react";
import NavBar from "../../components/navBar/style";
import {Main, useStyles} from "../default/style"
import { Header } from "../header/header";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tittle } from "./style";

export function Calendar(){

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBar />
                        <Card className={classes.card} sx={{direction:"column", justifyContent:"flex-start", padding: 4, minHeight:500}}>
                            
                            <Box width="90%">
                            <Tittle>Calendário de Eventos</Tittle>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                        Campeonato Goiano
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>17/09/2021</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography display='flex' direction='column' justifyContent='space-between'
                                        value="Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.">
                                        {/* <p>
                                            Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.
                                        </p> */}
                                        {/* <Grid display='flex' sx={{paddingLeft: 4}}>    
                                            <Button variant="contained" color="primary" >
                                                Inscrever
                                            </Button>
                                        </Grid> */}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <br />
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <Typography sx={{ width: '70%', flexShrink: 0 }}>Copa Brasil</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        24/out/2021
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography display='flex' direction='column' justifyContent='space-between' alignItems='center'
                                        value="Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.">
                                        {/* <p>
                                            Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.
                                        </p> */}
                                        {/* <Grid display='flex' sx={{paddingLeft: 4}}>    
                                            <Button variant="contained" color="primary" >
                                                Inscrever
                                            </Button>
                                        </Grid> */}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <br />
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography sx={{ width: '70%', flexShrink: 0 }}>
                                        Juvenil 2021
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        25/09/2021
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography display='flex' direction='column' justifyContent='space-between' alignItems='center'
                                        value="Este campeonato não está mais disponível para inscrição.">
                                        {/* <p>
                                            Este campeonato não está mais disponível para inscrição.
                                        </p> */}
                                        {/* <Grid display='flex' sx={{paddingLeft: 4}}>    
                                            <Button disabled variant="contained" color="primary" >
                                                Inscrever
                                            </Button>
                                        </Grid> */}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <br />
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <Typography sx={{ width: '70%', flexShrink: 0 }}>Evento de Aberura Super Liga 2021/2022</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        27/11/2021
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography display='flex' direction='column' justifyContent='space-between' alignItems='center'
                                        value="Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.">
                                        {/* <p>
                                            Este campeonato está disponível para inscrição. Clique no botão ao lado para se inscrever.
                                        </p> */}
                                        {/* <Grid display='flex' sx={{paddingLeft: 4}}>    
                                            <Button variant="contained" color="primary" >
                                                Inscrever
                                            </Button>
                                        </Grid> */}
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );


}