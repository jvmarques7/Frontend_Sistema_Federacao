import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cadastro from '../pages/cadastro';
import Initial from '../pages/initial';
import { BrowserRouter } from 'react-router-dom';
import Default from '../pages/default';
import { AreaAtleta } from '../pages/areaAtleta';
import { Calendar } from '../pages/Calendar';
import { InternalLogin } from '../internal/login';
import { Home } from '../internal/home';

  export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas Usuários */}
                <Route path="/" exact component={Initial} />
                <Route path="/cadastro/:id" component={Cadastro} />
                <Route path="/home" component={Default} />
                <Route path="/area_atleta" component={AreaAtleta} />
                <Route path="/calendario" component={Calendar} />
                {/* Rotas Intranet */}
                <Route path="/intranet" component={InternalLogin} />
                <Route path="/intranet_home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
  }