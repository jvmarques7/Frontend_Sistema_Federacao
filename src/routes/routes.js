import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cadastro from '../pages/cadastro';
import Initial from '../pages/initial';
import { BrowserRouter } from 'react-router-dom';
import Default from '../pages/default';
import { AreaAtleta } from '../pages/areaAtleta';

  export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Default} />
                <Route path="/area_atleta" component={AreaAtleta} />
            </Switch>
        </BrowserRouter>
    );
  }