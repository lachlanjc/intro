import { CssBaseline, GeistProvider, Themes, Page } from '@geist-ui/react'
import Author from '../components/author'

const theme = Themes.createFromDark({
  type: 'rounded',
  font: {
    sans:
      'ui-rounded, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono:
      'ui-monospace, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
})

function App({ Component, pageProps }) {
  return (
    <GeistProvider themes={[theme]} themeType="rounded">
      <style jsx global>{`
        html {
          font-size: 18px;
        }
      `}</style>
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
