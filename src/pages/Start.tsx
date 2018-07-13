import * as React from 'react'
import { Link } from 'react-router-dom'

import Content from '../components/Content'
import RoundButton from '../components/RoundButton'

import { Bread, Mustard, Wurst } from '../components/Hotdog'

const StartRoute = () => (
  <Content style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
    <Content>
      <Bread />
      <Mustard />
      <Wurst />
    </Content>
    <Content>
      <RoundButton>
        <Link to="/finish">Build!</Link>
      </RoundButton>
    </Content>
  </Content>
)

export default StartRoute