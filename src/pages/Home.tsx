import * as React from 'react'

import Content from '../components/Content'
import NavButton from '../components/NavButton'

const HomeRoute = () => (
  <Content style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
    <div>No hotdog :(</div>
    <NavButton to="/start">Start!</NavButton>
  </Content>
)

export default HomeRoute
