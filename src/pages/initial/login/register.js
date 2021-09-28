import React, {useState} from "react";
import loginImg from "../../../login.png";
import api from '../../../config/services/api';
import { useHistory } from "react-router-dom";
import {Box} from "@material-ui/core"

export function Register (props){

    let history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
     async function handleRegister(){
        const {data} = await api.post('user', {email, password});
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        history.push('/cadastro');
      }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Registre-se</div>
      <Box className="content" paddingTop="30px">
        <div className="image">
          <img src={loginImg}/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" name="senha" placeholder="senha" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Repita sua senha</label>
            <input type="password" name="senha2" placeholder="senha" onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
      </Box>
      <div className="footer">
        <button type="button" className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

