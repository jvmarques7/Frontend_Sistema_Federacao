import React, {useState} from "react";
import loginImg from "../../../login.svg";
import api from '../../../config/services/api';
import { useHistory } from "react-router-dom";

export function Register (props){

    let history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
     async function handleRegister(){
        const {data} = await api.post('user', {email, password});
        localStorage.setItem('token', data.token);
        history.push('/cadastro');
      }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Registre-se</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
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
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

