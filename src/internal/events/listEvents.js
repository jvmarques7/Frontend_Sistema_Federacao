import React, { Fragment, useEffect } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Divider, Button, Backdrop, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../../config/services/api';
import { Tittle } from './style';
import { Box } from '@mui/system';
import Moment from 'react-moment';
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useHistory } from 'react-router-dom';


const StyleSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5
            }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600]
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3
        }
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500
        })
    }
}));

export function ListEvent() {

    const [expanded, setExpanded] = React.useState(false);
    const [eventsList, setEventsList] = React.useState([]);

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [open, setOpen] = React.useState();
    useEffect(() => {
        async function atualizarEventos() {
            const { data } = await api.get('listar_eventos');
            setEventsList(data);
        }
        atualizarEventos();
    }, [open]);

    function definirEstado(e) {
        if (e === 'a') {
            return "Ativo"
        } else {
            return "Desativado"
        }
    }

    function estadoFuturo(e) {
        if (e === 'a') {
            return "desativar"
        } else {
            return "ativar"
        }
    }

    function definirTipo(e) {
        if (e === 'c') {
            return "Campeonato"
        } else {
            return "Evento"
        }
    }

    function definirAtuacao(e) {
        let arr = [];
        const atuacao = e.split("");
        atuacao.forEach((entry) => {
            if (entry === "1") {
                arr[0] = "Jogador"
            } else if (entry === "2") {
                arr[1] = "Árbitro"
            } else if (entry === "3") {
                arr[2] = "Técnico"
            }
        })
        return (arr.map(entrada => (
            <FormControlLabel disableTypography disabled control={<Checkbox defaultChecked />} label={entrada} />
        )))
    }

    function definirModalidade(e) {
        let arr = [];
        const modalidade = e.split("");
        modalidade.forEach((entry) => {
            if (entry === "1") {
                arr[0] = "Adulto"
            } else if (entry === "2") {
                arr[1] = "Paradesporto"
            } else if (entry === "3") {
                arr[2] = "Juvenil"
            } else if (entry === "4") {
                arr[3] = "Mirim"
            } else if (entry === "5") {
                arr[4] = "Infanto-Juvenil"
            } else if (entry === "6") {
                arr[5] = "Infantil"
            } else if (entry === "7") {
                arr[6] = "Master"
            }
        })
        return (arr.map(entrada => (
            <FormControlLabel disableTypography disabled control={<Checkbox defaultChecked />} label={entrada} />
        )))
    }

    function definirCategoria(e) {
        let arr = [];
        const categoria = e.split("");
        categoria.forEach((entry) => {
            if (entry === "1") {
                arr[0] = "Feminino"
            } else if (entry === "2") {
                arr[1] = "Masculino"
            }
        })
        return (arr.map(entrada => (
            <FormControlLabel disableTypography disabled control={<Checkbox defaultChecked />} label={entrada} />
        )))
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const openBackDrop = (e) => {

        async function salvarEvento(){
            await api.put(`control_event/${e}`);
            setOpen(false);
            // setState(true);
        }

        return(
            <Paper>
                <Box padding="20px">
                    <Typography variant="h6" paddingBottom="20px">
                        O evento {e} está {definirEstado(e.estado).toLowerCase()}.
                    </Typography>
                    <Typography variant="h6" paddingBottom="20px">
                        Deseja realmente {estadoFuturo(e.estado)}?
                    </Typography>
                    <Grid container>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                    <Grid container display="flex" paddingTop="20px">
                        <Grid item xs="auto" paddingRight="10px">
                            {/* {carregarControle(e)} */}
                            <Button variant="contained" onClick={salvarEvento}>{estadoFuturo(e.estado)}</Button>
                        </Grid>
                        <Grid item xs="auto">
                            <Button color="warning" variant="contained" onClick={handleClose}>Cancelar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        )
    }

    const [confirm, setConfirm] = React.useState(false);

    const closeConfirm = () => {
        setConfirm(false);
      };

    function openConfirm(){
        setConfirm(true);
    }

    // const [control, setControl] = React.useState({})
    // function carregarControle(e){
    //     setControl(e);
    // }

    return (
        <Fragment>
            <Tittle>Lista de Eventos</Tittle>
            {eventsList.map(e =>
            (<Box key={e.id} paddingLeft="20px" style={{ listStyleType: "none" }}>
                <Accordion expanded={expanded === e.id} onChange={handleChange(e.id)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '10%', flexShrink: 0 }}>
                            #{e.id}
                        </Typography>
                        <Typography sx={{ width: '45%', flexShrink: 0 }}>
                            {e.titulo}
                        </Typography>
                        <Typography sx={{ width: '30%', color: 'text.secondary' }}>
                            Tipo: {definirTipo(e.tipo)}
                        </Typography>
                        <Typography sx={{ width: '15%', color: 'text.secondary' }}>
                            {definirEstado(e.estado)}
                        </Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails >
                        <Grid container paddingTop="10px">
                                <Grid item xs={10}>
                                    {"Data do evento: "}
                                    <Moment format="DD/MM/YYYY">
                                        {e.data}
                                    </Moment>
                                </Grid>
                        </Grid>
                        <br />
                        <Grid container flex="1" justifyContent="space-between">
                            <Grid item xs={12}>Descrição: {e.decricao}</Grid>
                        </Grid>
                        <Grid container paddingTop="20px" flex="1" justifyContent="space-between">
                            <Grid item xs={3}>
                                <p>Atuação</p>
                                <FormGroup >
                                    {definirAtuacao(e.atuacoes)}
                                </FormGroup>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Modalidade</p>
                                <FormGroup>
                                    {definirModalidade(e.modalidades)}
                                </FormGroup>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Categoria</p>
                                <FormGroup>
                                    {definirCategoria(e.categorias)}
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container paddingTop="20px" flex="1" justifyContent="center">
                            <Grid item paddingRight="10px">
                                <Button id={e.id} variant="contained" onClick={handleToggle}>{estadoFuturo(e.estado)}</Button>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                >
                                    {openBackDrop(e.id)}
                                </Backdrop>  
                            </Grid>
                            <Grid item>
                                <Button id={e.id} color="error" variant="contained">Excluir</Button>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <br />
            </Box>)
            )}
        </Fragment>
    );
}