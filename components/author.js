import { Row, User, Spacer, Link } from '@geist-ui/react'
import { GitHub } from './icons'

const Author = ({ github = true, ...props }) => (
  <Row component="footer" className="author" justify="space-between" {...props}>
    <User src="https://github.com/lachlanjc.png" name="Lachlan Campbell">
      <User.Link href="https://lachlanjc.com/">@lachlanjc</User.Link>
    </User>
    {github && (
      <>
        <Spacer x={1} />
        <Link
          className="github"
          href="https://github.com/lachlanjc/intro"
          block
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
      .author .github {
        display: inline-flex;
        align-items: center;
      }
    `}</style>
  </Row>
)

export default Author
