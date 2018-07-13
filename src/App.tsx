import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'

import Header from './routes/Header'
import Content from './routes/Content'

const App: React.StatelessComponent<{}> = () => (
  <Router>
    <Layout>
      <Header />
      <Content />
    </Layout>
  </Router>
)

export default App
