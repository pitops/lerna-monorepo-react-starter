import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {ui} from '@packages/config'

class App extends Component {
  render() {
    return (
      <div>
        <p>Default port for this project is: {ui.port}</p>
        <h1>Hello world.</h1>
      </div>
    )
  }
}

export default hot(module)(App)
