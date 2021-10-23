import React, { useState , useEffect} from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tittle } from '../style';
import api from '../../../config/services/api';
import { toast } from 'react-toastify';
import Moment from 'react-moment'
import 'moment-timezone';
import Button from 'react-bootstrap/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    paper:{
      margin: 16,
      padding: 16,
      width: 225,
      maxHeight: 300,
      // background: 'green'
    }
  }));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "linear-gradient(rgb(245,245,245), white)"
}));

const Info = styled(Grid)(({ theme }) => ({
  direcition: "column",
  justifyContent: "flex-start"
}));


export default function FormAreaAtleta() {

    const [loadingEnd, setLoadingEnd] = useState(false);
    const [loadingMod, setLoadingMod] = useState(false);
    const [loadingAtu, setLoadingAtu] = useState(false);
    const [loadingCat, setLoadingCat] = useState(false);

//Carregar User
    const [user, setUser] = useState({});
    useEffect(() => {
        async function loadUser() {
            try {
                const {data} = await api.get(`find_user/${localStorage.email}`);
                setUser({
                    ...data
                });
                setLoadingMod(true)
                setLoadingEnd(true)
                setLoadingAtu(true)
                setLoadingCat(true)
            } catch (err) {
                toast.error(err);
            }
    }
        loadUser();
    }, []);

//Carregar Endereço
    const [endereco, setEndereco] = useState({});
    useEffect(() => {
        async function loadEndereco() {
            try {
                const user_id = await user.id;
                const {data} = await api.get(`endereco/${user_id}`);
                
                setEndereco({
                    ...data
                });
                
            } catch (err) {
                toast.error(err);
            }
        }
        loadEndereco();
    }, [loadingEnd]);    
   
//Carregar Atuacao
    const [atuacao, setAtuacao] = useState({});
    useEffect(() => {
        async function loadAtuacao() {
            try {
                const atuacao_id = await user.atuacao_id
                const {data} = await api.get(`atuacao/${atuacao_id}`);
                
                setAtuacao({
                    ...data
                });
                
            } catch (err) {
                toast.error(err);
            }
        }
    loadAtuacao();
    }, [loadingAtu]);

//Carregar Modalidade
    const [modalidade, setModalidade] = useState({});
    useEffect(() => {
    async function loadModalidade() {
        try {
            const modalidade_id = await user.modalidade_id
            // alert(modalidade_id)
            const {data} = await api.get(`modalidade/${modalidade_id}`);
            
            setModalidade({
                ...data
            });
        } catch (err) {
            toast.error(err);
        }
    }
    loadModalidade();
}, [loadingMod]);

//Carregar Categoria
    const [categoria, setCategoria] = useState({});
    useEffect(() => {
        async function loadCategoria() {
            try {
                const categoria_id = await user.categoria_id
                const {data} = await api.get(`categoria/${categoria_id}`);
                
                setCategoria({
                    ...data
                });
            } catch (err) {
                toast.error(err);
            }
        }
        loadCategoria();
    }, [loadingCat]);

    //Calcular Idade
    function getAge(dt) {
        var today = new Date();
        var birthDate = new Date(dt);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const classes = useStyles;

  return (

    <div>
      <Box sx={{ width: "100%", direction:"column", alignContent:"center", justifyContent:"center"  }}>
        <Box justifyContent="space-between" display="flex">
            <Tittle>Cadastro</Tittle>
            <Box margin="10px" padding="10px">
                <Button variant="primary" onClick={handleToggle}>Federar</Button>{' '}
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <Paper className={classes.paper}>Espaço para Federar-se</Paper>
                </Backdrop>
            </Box>
        </Box>
          <Grid sx={{padding: '0 20px 20px 20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{fontWeight: "bold", background: "linear-gradient(lightblue, white)"}}>
                      TIPO DE CADASTRO
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Atuação: {atuacao.atuacao}</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Modalidade: {modalidade.modalidade}</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Categoria: {categoria.categoria}</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{fontWeight: "bold", background: "linear-gradient(lightblue, white)"}}>
                      DADOS PESSOAIS
                  </Item>
              </Grid>
              <Grid item xs={8}>
                  <Item>
                      <Info container>Nome Completo: {user.nomeCompleto}</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Sexo: {user.sexo}</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container><span>
                        Idade:{" "+ getAge(user.dt_nascimento) +" anos ("}
                        <Moment format="DD/MM/YYYY">
                             {user.dt_nascimento}
                        </Moment>
                        {")"}
                        </span>
                    </Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Naturalidade: {user.naturalidade}</Info>
                  </Item>
              </Grid>
              <Grid item xs={5}>
                  <Item>
                      <Info container>Clube: {user.clube}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                  <Info container>Telefone: {user.telefone}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Celular: {user.celular}</Info>
                  </Item>
              </Grid>
              <Grid item xs={6}>
                  <Item>
                      <Info container>Email: {user.email}</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{fontWeight: "bold", background: "linear-gradient(lightblue, white)"}}>
                      DOCUMENTOS
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>CPF: {user.cpf}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>RG: {user.rg}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Passaporte: {user.passaporte}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Naturalidade: {user.naturalidade}</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{fontWeight: "bold", background: "linear-gradient(lightblue, white)"}}>
                      ENDEREÇO
                  </Item>
              </Grid>
              <Grid item xs={6}>
                  <Item>
                      <Info container>Logradouro: {endereco.logradouro}</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Bairro: {endereco.bairro}</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>CEP: {endereco.cep}</Info>
                  </Item>
              </Grid>
              <Grid item xs={5}>
                  <Item>
                      <Info container>Complemento: {endereco.complemento}</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>Número: {endereco.numero}</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>Estado: {endereco.estado}</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Cidade: {endereco.cidade}</Info>
                  </Item>
              </Grid>
          </Grid>
      </Box>
    </div>
  );
}