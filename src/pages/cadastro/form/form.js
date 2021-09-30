import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Seccion, Tittle } from '../style';
import { useHistory, useParams } from 'react-router';
import api from '../../../config/services/api';
import cep from 'cep-promise';
import Portal from '@mui/material/Portal';
import { CpfFormatCustom, PhoneFormatNumber, TelFormatNumber } from '../../../components/mask/maskCpf';
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

  const [show, setShow] = useState(false);
  const container = React.useRef(null);

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
  const [zipCode, setZipCode] = useState("");
  const [adress, setAdress] = useState({});
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();

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
      categoria_id,
      cep : zipCode,
      logradouro,
      complemento,
      bairro,
      numero,
      cidade,
      estado,
      user_id: id
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

  useEffect(() => {
    async function getAddressData(){
      if(zipCode.length >= 8 ){
        const response = await cep(zipCode);
        setAdress(response);
        setShow(!show)
        console.log(response);
      }
    }
    
    getAddressData();
  }, [zipCode])

// useState -> Masks
  const [values, setValues] = React.useState({
    cpf: '',
    telefone: '',
    celular: ''

  });
  const handleCpf = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setCpf(e.target.value)
  };
  const handleTel = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setTelefone(e.target.value)
  };
  const handleCel = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setCelular(e.target.value)
  };


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
      
      {/* Atuacao */}
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
                <TextField id="telefone" label="Telefone" variant="outlined" onChange={handleTel}
                  value={values.telefone}
                  name="telefone"
                  InputProps={{
                    inputComponent: TelFormatNumber,
                  }}
                />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FormControl fullWidth> 
                <TextField id="celular" label="Celular" variant="outlined" onChange={handleCel}
                  value={values.celular}
                  name="celular"
                  InputProps={{
                    inputComponent: PhoneFormatNumber,
                  }}
                />
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
                <TextField id="cpf" label="CPF" variant="outlined" onChange={handleCpf}
                  value={values.cpf}
                  name="cpf"
                  InputProps={{
                    inputComponent: CpfFormatCustom,
                  }}
                />
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
                  <TextField id="cep" label="CEP" variant="outlined" onChange={(e) => {setZipCode(e.target.value)}}/>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="logradouro" label="Logradouro" variant="outlined" 
                    InputLabelProps={show ? {shrink: true} : {shrink: false}} value={show ? (adress.street) : ''} 
                    onChange={e => setLogradouro(e.target.value)}
                  />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="bairro" label="bairro" variant="outlined"
                    InputLabelProps={show ? {shrink: true} : {shrink: false}} value={show ? (adress.neighborhood) : ''} 
                    onChange={e => setBairro(e.target.value)}
                  />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="complemento" label="Complemento" variant="outlined"
                    onChange={e => setComplemento(e.target.value)}
                  />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="numero" label="Número" variant="outlined"
                    onChange={e => setNumero(e.target.value)}
                  />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="estado" label="estado" variant="outlined"
                    InputLabelProps={show ? {shrink: true} : {shrink: false}} value={show ? (adress.state) : ''}
                    onChange={e => setEstado(e.target.value)}
                  >
                    
                  </TextField>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <FormControl fullWidth> 
                  <TextField id="cidade" label="cidade" variant="outlined"
                    InputLabelProps={show ? {shrink: true} : {shrink: false}} value={show ? (adress.city) : ''} 
                    onChange={e => setCidade(e.target.value)}
                  />
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
    </Box>
    </Paper>
  );
}