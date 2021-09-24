import React from 'react';
import { Box } from '@material-ui/core';
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tittle } from '../style';

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

const InfoTittle = styled(Grid)(({ theme }) => ({
  direcition: "column",
  justifyContent: "flex-end"
}));


export default function FormAreaAtleta() {

  return (

    <div>
      <Box sx={{ width: "100%", direction:"column", alignContent:"center", justifyContent:"center"  }}>
          <Tittle>Meu cadastro</Tittle>
          <Grid sx={{padding: '0 0 20px 20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{background: "linear-gradient(lightblue, white)"}}>
                      TIPO DE CADASTRO
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Atuação:</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Modalidade:</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Categoria:</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{background: "linear-gradient(lightblue, white)"}}>
                      DADOS PESSOAIS
                  </Item>
              </Grid>
              <Grid item xs={8}>
                  <Item>
                      <Info container>Nome Completo:</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Sexo:</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Data de Nascimento:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Naturalidade:</Info>
                  </Item>
              </Grid>
              <Grid item xs={5}>
                  <Item>
                      <Info container>Clube:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                  <Info container>Telefone:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Celular:</Info>
                  </Item>
              </Grid>
              <Grid item xs={6}>
                  <Item>
                      <Info container>Email:</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{background: "linear-gradient(lightblue, white)"}}>
                      DOCUMENTOS
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>CPF:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>RG:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Passaporte:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Naturalidade:</Info>
                  </Item>
              </Grid>
          </Grid>
          <Grid sx={{padding: '20px'}} container rowSpacing={1.5} columnSpacing={2}>
              <Grid item xs={12}>
                  <Item sx={{background: "linear-gradient(lightblue, white)"}}>
                      ENDEREÇO
                  </Item>
              </Grid>
              <Grid item xs={6}>
                  <Item>
                      <Info container>Logradouro:</Info>
                  </Item>
              </Grid>
              <Grid item xs={4}>
                  <Item>
                      <Info container>Bairro:</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>CEP:</Info>
                  </Item>
              </Grid>
              <Grid item xs={5}>
                  <Item>
                      <Info container>Complemento:</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>Número:</Info>
                  </Item>
              </Grid>
              <Grid item xs={2}>
                  <Item>
                      <Info container>Estado:</Info>
                  </Item>
              </Grid>
              <Grid item xs={3}>
                  <Item>
                      <Info container>Cidade:</Info>
                  </Item>
              </Grid>
          </Grid>
      </Box>
    </div>
  );
}

{/* <FormControl fullWidth> 
<TextField id="outlined-basic" label="Outlined" variant="outlined"/>
</FormControl> */}