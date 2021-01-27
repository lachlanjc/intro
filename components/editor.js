import React, { useState, useEffect } from 'react'
import {
  Card,
  Col,
  Divider,
  Grid,
  Row,
  Spacer,
  Textarea,
} from '@geist-ui/react'

const Editor = ({ defaultValue = '', checks = [], children, sx, ...props }) => {
  const [content, setContent] = useState(defaultValue)
  const [verified, setVerified] = useState(false)

  useEffect(
    () => {
      const verification = checks.map(
        check =>
          check.constructor.name === 'RegExp'
            ? content.match(check)
            : content.includes(check),
      )
      console.log(verification)
      setVerified(verification.every(c => c === true))
    },
    [content, checks],
  )

  return (
    <Card
      type={verified ? 'cyan' : false}
      shadow
      style={{ marginBottom: '16pt' }}
    >
      <Card.Content justify="center" style={{ textAlign: 'center' }}>
        {children}
      </Card.Content>
      <Divider />
      <Card.Content>
        <Grid.Container>
          <Grid md={12}>
            <Textarea
              status={verified ? 'success' : false}
              minHeight="100%"
              minWidth="100%"
              value="Success"
              initialValue={defaultValue}
              value={content}
              onChange={e => setContent(e.target.value)}
              style={{
                fontFamily: 'ui-monospace, monospace',
                width: '100%',
                height: '100%',
              }}
            />
          </Grid>
          <Grid md={12}>
            <iframe
              title="code preview"
              frameBorder={0}
              src={`data:text/html,${encodeURIComponent(content)}`}
            />
          </Grid>
        </Grid.Container>
      </Card.Content>
    </Card>
  )
}

export default Editor
