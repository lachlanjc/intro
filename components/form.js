import {
  Fieldset,
  Row,
  Input,
  Spacer,
  Button,
  useToasts,
} from '@geist-ui/react'
import { Author } from './author'

const Form = () => {
  const [toasts, setToast] = useToasts()

  return (
    <Fieldset>
      <Fieldset.Title>Send me your creation</Fieldset.Title>
      <Fieldset.Subtitle>
        I’d love to see what you made during this workshop—even if you think
        it’s embarassing :)
      </Fieldset.Subtitle>
      <form
        action="https://formspree.io/f/mzbkldlo"
        onSubmit={() =>
          setToast({ text: 'Submitted your website!', type: 'success' })
        }
        method="POST"
      >
        <Row>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="tim@apple.com"
          />
        </Row>
        <Spacer y={1} />
        <Row>
          <Input
            label="URL"
            type="url"
            name="url"
            placeholder="https://lachlanjc.com"
          />
        </Row>
        <Spacer y={1} />
        <Button htmlType="submit" type="success" ghost>
          Submit
        </Button>
      </form>
      <Fieldset.Footer>
        <Author />
      </Fieldset.Footer>
    </Fieldset>
  )
}

export default Form
