import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='container mt-4' style={{ height: '80vh' }}>
      <Card>
        <Card.Header>
          <Nav variant='tabs' defaultActiveKey='first'>
            <Nav.Item>
              <Nav.Link eventKey='first'>Mi Perfil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='second'>Mis Pedidos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='third'>Configuración</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className='card-body-Profile'>
          <Card.Title>Mi Perfil</Card.Title>
          <Card.Text>Información de tu cuenta y preferencias.</Card.Text>
          <hr />
          <div className='d-flex justify-content-center flex-column align-items-center container-Profile'>
            <Card.Text className='text-Profile'>
              <strong>Nombre:</strong> <span>Juan Pérez</span>
            </Card.Text>
            <Card.Text className='text-Profile'>
              <strong>Fecha de Nacimiento:</strong> <span>29 de julio de 1990</span>
            </Card.Text>
            <Card.Text className='text-Profile'>
              <strong>Email:</strong> <span>juanperez@example.com</span>
            </Card.Text>
            <Card.Text className='text-Profile'>
              <strong>Teléfono:</strong> <span>1234567890</span>
            </Card.Text>
            <Card.Text className='text-Profile'>
              <strong>Dirección:</strong> <span>Calle Falsa 123</span>
            </Card.Text>
          </div>

          <div className='d-flex justify-content-center gap-2 botonera-Profile'>
            <Button variant='primary'>Editar Perfil</Button>
            <Button variant='primary'>Cambiar contraseña</Button>
            <Button variant='primary'>Cerrar sesión</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile
