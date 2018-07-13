import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header'

const HeaderRoute: React.StatelessComponent = () => (
  <Switch>
    <Route exact path="/start" render={() => <Header>Ingredients</Header>} />
    <Route exact path="/finish" render={() => <Header>Hotdog!</Header>} />
  </Switch>
)

export default HeaderRoute
