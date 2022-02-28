import React from 'react'
import Container from './components/Container'
import Contents from './components/Content/Contents'
import Sidebar from './components/Sidebar/Sidebar'
import Timeline from './components/Timeline/Timeline'

const App = () => {
  return (
    <Container>
      <Sidebar />
        <Contents />
        <Timeline />
    </Container>
  )
}

export default App