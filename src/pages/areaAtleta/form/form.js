import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Seccion, Tittle } from '../style';
// import api from '../../../config/services/api';
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 35,
    marginBottom: 35
  },
  paper: {
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  display: {
    display: 'flex',
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '20em',
  },
}));


export default function FullWidthGrid() {
  
  // let history = useHistory();

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // async function handleCadastro(){
  //   const {data} = await api.post('user', {email, password});
  //   localStorage.getItem('token', data.token);
  //   history.push('/home');
  // }
  
  const [atuacao, setAtuacao] = React.useState('');
  const handleAtuacao = (event) => {
  setAtuacao(event.target.value);
  };
  
  const [modalidade, setModalidade] = React.useState('');
  const handleModalidade = (event) => {
  setModalidade(event.target.value);
  };
  
  const [categoria, setCategoria] = React.useState('');
  const handleCategoria = (event) => {
  setCategoria(event.target.value);
  };

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Box justifyContent="space-between" display="flex">
        <Tittle>Cadastro</Tittle>
        <div className="footer">
          <button type="button" className="btn">
            Salvar
          </button>
        </div>
      </Box>
      <Seccion>Atuação</Seccion>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="simple-select-filled-label">Atuacao</InputLabel>
        <Select
          labelId="simple-select-filled-label"
          id="simple-select-filled"
          value={atuacao}
          onChange={handleAtuacao}
        >
          <MenuItem value={1}>Jogador</MenuItem>
          <MenuItem value={2}>Arbitro</MenuItem>
          <MenuItem value={3}>Técnico</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="simple-select-filled-label">Modalidade</InputLabel>
        <Select
          labelId="simple-select-filled-label"
          id="simple-select-filled"
          value={modalidade}
          onChange={handleModalidade}
        >
          <MenuItem value={1}>Adulto</MenuItem>
          <MenuItem value={2}>Paradesporto</MenuItem>
          <MenuItem value={3}>Base</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="simple-select-filled-label">Categoria</InputLabel>
        <Select
          labelId="simple-select-filled-label"
          id="simple-select-filled"
          value={categoria}
          onChange={handleCategoria}
        >
          <MenuItem value={1}>Adulto</MenuItem>
          <MenuItem value={2}>Paradesporto</MenuItem>
          <MenuItem value={3}>Base</MenuItem>
        </Select>
      </FormControl>

      {/* Dados Pessoais */}
      <Seccion>Dados Pessoais</Seccion>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="nomeCompleto" label="Nome Completo" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="sexo" label="Sexo" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
              <TextField
                id="outlined-number"
                label="Data de Nascimento"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="naturalidade" label="Naturalidade" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="clube" label="Clube" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="telefone" label="Telefone" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="celular" label="Celular" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="email" label="Email" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>          
        {/* Documentos */}
        <Seccion>Documentos</Seccion>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="cpf" label="CPF" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="passaporte" label="Passaporte" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="rg" label="RG" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="nacionalidade" label="Nacionalidade" variant="outlined"/>
            </FormControl>
          </Paper>
        </Grid>
        </Grid>

        {/* Endereço */}
        <Seccion>Endereço</Seccion>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="logradouro" label="Logradouro" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="numero" label="Número" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="complemento" label="Complemento" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="cep" label="CEP" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}

{/* <FormControl fullWidth> 
<TextField id="outlined-basic" label="Outlined" variant="outlined"/>
</FormControl> */}