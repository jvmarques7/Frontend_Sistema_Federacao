import React, {useState} from "react";
import api from '../../../config/services/api'
import loginImg from "../../../login.svg";
import history from "../../../config/services/history";
import { useHistory } from "react-router-dom";
import { sign } from "jsonwebtoken";

 export function Login (props) {

  let history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   async function handleLogin(){
      const {data} = await api.post('login', {email, password});
      localStorage.setItem('token', data.token);
      history.push('/home');   
    }

    

    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
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
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <a href="blank"><h5>Esqueci minha senha</h5></a>
      </div>
    );
  
}
