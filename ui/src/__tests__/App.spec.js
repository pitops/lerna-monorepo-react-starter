import React from 'react'
import {render} from 'app-test-utils'

import App from '../App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
