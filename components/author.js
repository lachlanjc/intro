import {
  Row,
  User,
  Spacer,
  Link,
  Divider,
  Text,
  Col,
  Grid,
} from '@geist-ui/react'
import { GitHub } from './icons'

export const Author = () => (
  <User
    src="https://github.com/lachlanjc.png"
    altText="Lachlan avatar"
    name="Lachlan Campbell"
  >
    <User.Link href="https://lachlanjc.com/">@lachlanjc</User.Link>
  </User>
)

const Footer = ({ github = true, ...props }) => (
  <>
    <Divider y={5} />
    <Row
      component="footer"
      className="author"
      justify="space-between"
      {...props}
    >
      <User src="https://github.com/lachlanjc.png" name="Lachlan Campbell">
        <User.Link href="https://lachlanjc.com/">@lachlanjc</User.Link>
      </User>
      {github && (
        <>
          <Spacer x={1} />
          <Link
            href="https://github.com/lachlanjc/intro"
            block
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <GitHub width={20} height={20} />
            <Spacer x={0.375} />
            View source
          </Link>
        </>
      )}
      <style jsx global>{`
        .author {
          align-items: center !important;
          margin-top: 24pt !important;
        }
      `}</style>
    </Row>
  </>
)

export default Footer
