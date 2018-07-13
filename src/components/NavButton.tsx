import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import RoundButton from './RoundButton'

interface Props {
  to: string
}

const NavButton: React.StatelessComponent<Props & RouteComponentProps<Props, {}>
> = ({ children, to, history }) => (
  <RoundButton onClick={() => history.push(to)} >
    {children}
  </RoundButton>
)

export default withRouter(NavButton)
