import { GeistProvider, CssBaseline, Page } from '@geist-ui/react'
import Author from '../components/author'

const theme = {
  font: {
    sans:
      'ui-rounded, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono:
      'ui-monospace, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
}

function App({ Component, pageProps }) {
  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <Page size="small">
        <Page.Content>
          <Component {...pageProps} />
          <Author />
        </Page.Content>
      </Page>
    </GeistProvider>
  )
}

export default App
