import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../config/services/api";
import loginImg from "../../login.svg";
import {Paper, Snackbar, Stack} from "@mui/material";
import { Container } from "@material-ui/core";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export function InternalLogin(props){

    let history = useHistory();

    const [username, setUsuario] = useState();
    const [password, setPassword] = useState();

    const [open, setOpen] = useState(false)

   async function handleLogin(){
      const {data} = await api.post('intranet', {username, password});
      if(data.token){
        localStorage.setItem('token', data.token);
        history.push('/intranet_home');
      }else{
          console.log(data)
          handleClickOpen();
      }
    }
        const handleClickOpen = () => {
        setOpen(true);
        };

        const handleClose = () => {
        setOpen(false);
        };

    return (
        <Container sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            position: 'relative',
            zIndex: 99,
            width: '100%',
            height: '100%'}}>
            <Paper sx={{width: 400}}>
                <div className="base-container" ref={props.containerRef}>
                    <br />
                    <div className="header">Intranet</div>
                    <div className="header">Faça seu login</div>
                    <div className="content">
                    {/* <div className="image">
                        <img src={loginImg} />
                    </div> */}
                    <div className="form">
                        <div className="form-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" name="usuario" onChange={e => setUsuario(e.target.value)} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="senha" onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    </div>
                    <div className="footer">
                    <button type="button" className="btn" onClick={handleLogin}>
                        Login
                    </button>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Snackbar open={open} anchorOrigin={{vertical: "top", horizontal: "right"}} autoHideDuration={3000} onClose={handleClose}>
                            <Alert 
                            onClose={handleClose} 
                            severity="error" 
                            sx={{ width: '100%' }}>
                            Usuário/Senha incorreta! Tente novamente.
                            </Alert>
                        </Snackbar>
                    </Stack>
                    </div>
                    <br />
                    {/* <a href="blank"><h5>Esqueci minha senha</h5></a> */}
                </div>
            </Paper>
        </Container>
    );

}