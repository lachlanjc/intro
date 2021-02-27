import {
  Fieldset,
  Row,
  Input,
  Spacer,
  Button,
  useToasts,
} from '@geist-ui/react'

const Form = () => {
  const [toasts, setToast] = useToasts()

  return (
    <Fieldset>
      <Fieldset.Title>Submit your creation</Fieldset.Title>
      <Fieldset.Subtitle>
        Email is optional, if you want me to send you links afterwards.
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
    </Fieldset>
  )
}

export default Form
