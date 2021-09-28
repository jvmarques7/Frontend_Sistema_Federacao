import React, {useState} from "react";
import api from '../../../config/services/api'
import loginImg from "../../../login.png";
import { useHistory } from "react-router-dom";
import {Box} from "@material-ui/core"
import { Snackbar, Stack } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 export function Login (props) {

  let history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [open, setOpen] = useState(false)

   async function handleLogin(){
    const {data} = await api.post('login', {email, password});
    if(data.token){
      localStorage.setItem('token', data.token);
      history.push('/home');
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
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <Box className="content" paddingTop="30px">
          <div className="image">
            <img src={loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" name="senha" placeholder="senha"  onChange={e => setPassword(e.target.value)}/>
            </div>
          </div>
        </Box>
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
        <a href="blank"><h5>Esqueci minha senha</h5></a>
      </div>
    );
  
}
