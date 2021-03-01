import { useState } from 'react'
import { Card, Spacer, Row, Col, Description, Textarea } from '@geist-ui/react'

const Editor = ({ defaultHtml = '', defaultCss = '', height = 256 }) => {
  const [html, setHtml] = useState(defaultHtml)
  const [css, setCss] = useState(defaultCss)

  const code = `<!DOCTYPE html>
  <meta charset="UTF-8">
<style>${css}</style>
${html}`

  return (
    <Card
      shadow
      style={{ marginTop: '32pt', marginBottom: '48pt', overflowX: 'auto' }}
      className="editor"
    >
      <Row>
        <Col span={12}>
          <Row>
            <Description
              title="HTML"
              content={
                <Textarea
                  rows={6}
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
              }
            />
          </Row>
          {defaultCss !== '' && (
            <>
              <Spacer y={1} />
              <Row>
                <Description
                  title="CSS"
                  content={
                    <Textarea
                      rows={6}
                      value={css}
                      onChange={(e) => setCss(e.target.value)}
                    />
                  }
                />
              </Row>
            </>
          )}
        </Col>
        <Spacer x={2} />
        <Col
          span={12}
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            minHeight: height,
          }}
        >
          <iframe
            title="code preview"
            frameBorder={0}
            src={`data:text/html,${encodeURIComponent(code)}`}
            height="100%"
            width="100%"
          />
        </Col>
      </Row>
    </Card>
  )
}

export default Editor
