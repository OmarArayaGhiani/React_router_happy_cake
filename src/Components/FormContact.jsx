import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';
import "../Assets/css/formContact.css"

const FormContact = () => {
  return (
    <div>
      <Container className="mt-5 text-center">
        <Form className="formWidth m-auto">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="tu.correo@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="danger" className="mt-3">Enviar</Button>
      </Container>
    </div>
  )
}

export default FormContact
