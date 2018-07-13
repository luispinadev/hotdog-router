import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Container from '../components/Container'
import Finish from '../pages/Finish'
import Home from '../pages/Home'
import Start from '../pages/Start'


const ContentRoute = () => (
  <Container>
    <Switch>
      <Route exact path="/" render={() => <Home />}/>
      <Route exact path="/finish" render={() => <Finish />}/>
      <Route exact path="/start" render={() => <Start />}/>

      <Redirect to="/" />
    </Switch>
  </Container>
)

export default ContentRoute