import React, { useState, useRef, useEffect } from 'react'
import { Card, Divider, Grid, Loading, Textarea } from '@geist-ui/react'
import useComponentSize from '@rehooks/component-size'
import Confetti from 'react-confetti'

const Checkpoint = ({
  defaultValue = '',
  checks = [],
  placeholder = 'Code here…',
  cols = [12, 12],
  children,
}) => {
  const ref = useRef(null)
  const { width, height } = useComponentSize(ref)

  const [content, setContent] = useState(defaultValue)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const verification = checks.map((check) =>
      check.constructor.name === 'RegExp'
        ? content.match(check)
        : content.includes(check),
    )
    console.log(verification)
    setVerified(verification.every((c) => c === true))
  }, [content, checks])

  return (
    <Card shadow style={{ marginTop: '32pt', marginBottom: '48pt' }}>
      <Card.Content justify="center" className="instruct">
        {children}
      </Card.Content>
      <Divider y={0} />
      <div className="checkpoint-editor" ref={ref}>
        <Card.Content>
          <Grid.Container>
            <Grid md={cols[0]}>
              <Textarea
                status="success"
                initialValue={defaultValue}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={placeholder}
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                }}
              />
              {verified && (
                <Confetti
                  recycle={false}
                  numberOfPieces={512}
                  width={width}
                  height={height}
                />
              )}
            </Grid>
            <Grid
              md={cols[1]}
              style={{ backgroundColor: 'white', borderRadius: 5 }}
            >
              {content ? (
                <iframe
                  title="code preview"
                  frameBorder={0}
                  src={`data:text/html,${encodeURIComponent(content)}`}
                />
              ) : (
                <Loading>
                  {cols[1] > 10 && 'Your code will preview here'}
                </Loading>
              )}
            </Grid>
          </Grid.Container>
        </Card.Content>
      </div>
      <style jsx global>{`
        .instruct p {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 700;
        }
      `}</style>
    </Card>
  )
}

export default Checkpoint
