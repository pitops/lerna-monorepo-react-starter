import React from 'react'
import {render} from 'react-testing-library'
import {ThemeProvider} from 'styled-components'
import theme from '../src/themes/default'

function renderWithProviders(ui, options) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)
}

export * from 'react-testing-library'
export {renderWithProviders as render}
