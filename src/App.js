import Nav from './Nav'
import React from 'react'
import Main from './pages/Main'
import Foot from './Foot'

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Foot />
    </React.Fragment>
    </div>
  );
}

export default App