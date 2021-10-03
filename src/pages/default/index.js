import React, { useEffect } from "react";
import {useStyles} from "./style"
import {Main} from "./style.js";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Header} from "../header/header";
import NavBar from "../../components/navBar/style"
import Card from "@material-ui/core/Card";
import api from "../../config/services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
//import { Link } from 'react-router-dom';

function Default (){

    const notify = () => toast.warning(text);
    let text = '';

    let history = useHistory();

    useEffect(() => {
        async function verifyUser(){
            const email = localStorage.getItem('email')
            const response = await api.get(`find_user/${email}`)
      if(response.data.cpf){
        history.push('/');
      }else{
        if(localStorage.getItem('token') && localStorage.getItem('token') !== undefined){
            text = 'Por favor, complete seu cadastro para continuar..'
            notify();
            history.push(`/cadastro/${response.data.id}`)
        }else{
            history.push('/sign');
        }
      }
        }
        verifyUser();
    },[])

    const classes = useStyles();

    return(
        <div>
            <Header />
            <Main>
                <Container maxWidth='xl'>
                    <Box display='flex' className={classes.box}>
                        <NavBar />
                        <Card className={classes.card}>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </div>
    );

}

export default Default;