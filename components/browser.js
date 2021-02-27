import { Display, Image } from '@geist-ui/react'

const Browser = ({ caption, height = 256, url, html, css }) => {
  const code = `<!DOCTYPE html>
  <meta charset="UTF-8">
<style>${css}</style>
${html}`
  return (
    <Display
      caption={caption}
      width="100%"
      style={{
        maxWidth: 512,
      }}
    >
      <Image.Browser
        invert={!url}
        url={url}
        style={{
          width: '100%',
          margin: 'auto',
          lineHeight: 0,
          borderRadius: 10,
        }}
      >
        <iframe
          title="code preview"
          frameBorder={0}
          src={url || `data:text/html,${encodeURIComponent(code)}`}
          style={{ background: 'white', width: '100%', height }}
        />
      </Image.Browser>
    </Display>
  )
}

export default Browser
