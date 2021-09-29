import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Seccion, Tittle } from '../style';
import { useHistory, useParams } from 'react-router';
import api from '../../../config/services/api';
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
    textAlign: 'center'
  },
  display: {
    display: 'flex',
    width: '100%'
  },
  formControl: {
    padding: 16,
    width: '30%',
  },
}));


export default function FullWidthGrid() {

  const id = useParams();
  
  let history = useHistory();

  const [nomeCompleto, setNomeCompleto] = useState();
  const [rg, setRg] = useState();
  const [cpf, setCpf] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [dt_nascimento, setDt_Nascimento] = useState();
  const [sexo, setSexo] = useState();
  const [naturalidade, setNaturalidade] = useState();
  const [clube, setClube] = useState();
  const [telefone, setTelefone] = useState();
  const [celular, setCelular] = useState();
  const [passaporte, setPassaporte] = useState();
  const [email, setEmail] = useState();

  async function handleCadastro(){

    const {data} = await api.put('completar_cadastro', {
      id,
      cpf,
      rg,
      email,
      name: nomeCompleto,
      dt_nascimento,
      naturalidade,
      clube,
      sexo,
      telefone,
      celular,
      passaporte,
      nacionalidade,
      atuacao_id,
      modalidade_id,
      categoria_id
    });
    console.log(data)
    history.push('/home');
  }
  
  const [atuacao_id, setAtuacao] = React.useState('');
  const handleAtuacao = (event) => {
  setAtuacao(event.target.value);
  };
  
  const [modalidade_id, setModalidade] = React.useState('');
  const handleModalidade = (event) => {
  setModalidade(event.target.value);
  };
  
  const [categoria_id, setCategoria] = React.useState('');
  const handleCategoria = (event) => {
  setCategoria(event.target.value);
  };

  const classes = useStyles();

  return (

    <Paper>
    <Box padding="20px">
      <Box justifyContent="space-between" display="flex">
        <Tittle>Cadastro</Tittle>
        <Box margin="10px">
          <button type="button" className="btn" onClick={handleCadastro}>
            Salvar
          </button>
        </Box>
      </Box>
      
      <Seccion>Atuação</Seccion>
      <Box justifyContent="space-between" display="flex" padding="7px 9px 9px 9px">
        <FormControl variant="filled" className={classes.formControl} >
          <InputLabel id="simple-select-filled-label">Atuacao
          </InputLabel>
          <Select
            labelId="simple-select-filled-label"
            id="simple-select-filled"
            value={atuacao_id}
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
            value={modalidade_id}
            onChange={handleModalidade}
          >
            <MenuItem value={1}>Adulto</MenuItem>
            <MenuItem value={2}>Paradesporto</MenuItem>
            <MenuItem value={3}>Juvenil</MenuItem>
            <MenuItem value={4}>Mirim</MenuItem>
            <MenuItem value={5}>Infanto-Juvenil</MenuItem>
            <MenuItem value={6}>Infantil</MenuItem>
            <MenuItem value={7}>Master</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="simple-select-filled-label">Categoria</InputLabel>
          <Select
            labelId="simple-select-filled-label"
            id="simple-select-filled"
            value={categoria_id}
            onChange={handleCategoria}
          >
            <MenuItem value={1}>Feminino</MenuItem>
            <MenuItem value={2}>Masculino</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Dados Pessoais */}
      <Seccion>Dados Pessoais</Seccion>
      <Grid container paddingBottom="20px" spacing={0}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="nomeCompleto" label="Nome Completo" variant="outlined" onChange={e => setNomeCompleto(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="sexo" label="Sexo" variant="outlined" onChange={e => setSexo(e.target.value)}/>
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
                onChange={e => setDt_Nascimento(e.target.value)}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="naturalidade" label="Naturalidade" variant="outlined" onChange={e => setNaturalidade(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="clube" label="Clube" variant="outlined" onChange={e => setClube(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="telefone" label="Telefone" variant="outlined" onChange={e => setTelefone(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="celular" label="Celular" variant="outlined" onChange={e => setCelular(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="email" label="Email" onChange={e => setEmail(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>          
        {/* Documentos */}
        <Seccion>Documentos</Seccion>
        <Grid container paddingBottom="20px" spacing={0}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="cpf" label="CPF" variant="outlined" onChange={e => setCpf(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="passaporte" label="Passaporte" variant="outlined" onChange={e => setPassaporte(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="rg" label="RG" variant="outlined" onChange={e => setRg(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="nacionalidade" label="Nacionalidade" variant="outlined" onChange={e => setNacionalidade(e.target.value)}/>
            </FormControl>
          </Paper>
        </Grid>
        </Grid>

        {/* Endereço */}
        <Seccion>Endereço</Seccion>
        <Grid container paddingBottom="20px" spacing={0}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="cep" label="cep" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="logradouro" label="Logradouro" variant="outlined" />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="bairro" label="bairro" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="complemento" label="Complemento" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="numero" label="Número" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="estado" label="estado" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="cidade" label="cidade" variant="outlined"/>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
    </Box>
    </Paper>
  );
}

{/* <FormControl fullWidth> 
<TextField id="outlined-basic" label="Outlined" variant="outlined"/>
</FormControl> */}