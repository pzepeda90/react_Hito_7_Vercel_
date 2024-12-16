import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { Container, Button, ListGroup, Image } from 'react-bootstrap';
import './cart.css'


const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { isAuthenticated } = useContext(UserContext);
  
  const aumentarCantidad = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, cantidad: item.cantidad + 1 } 
          : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => 
        item.id === id 
          ? { ...item, cantidad: Math.max(0, item.cantidad - 1) } 
          : item
      );
      return updatedItems.filter(item => item.cantidad > 0);
    });
  };

  const total = cartItems.reduce((acc, item) => 
    acc + (item.price * item.cantidad), 0
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <h3>Detalles del pedido</h3>
      
      {cartItems.length === 0 ? (
        <p className="text-center">Tu carrito está vacío</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map(pizza => {
              const totalPizza = pizza.price * pizza.cantidad;

              return (
                <ListGroup.Item 
                  key={pizza.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-3">
                    <Image 
                      src={pizza.img} 
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      rounded
                    />
                    <div>
                      <h5 className="mb-1">{pizza.name}</h5>
                      <p className="mb-0 text-danger fw-bold">${pizza.price.toLocaleString('es-CL')}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => disminuirCantidad(pizza.id)}
                      >
                        -
                      </Button>
                      <span className="fw-bold">{pizza.cantidad}</span>
                      <Button 
                        variant="outline-primary"
                        size="sm"
                        onClick={() => aumentarCantidad(pizza.id)}
                      >
                        +
                      </Button>
                    </div>
                    <p className="mb-0 fw-bold">Total: ${totalPizza.toLocaleString('es-CL')}</p>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <h3 className="text mt-4 carritoTotal">Total Compra: ${total.toLocaleString('es-CL')}</h3>
          <Button 
            className="mt-4 botonCompra" 
            variant="outline-primary"
            disabled={!isAuthenticated}
            title={!isAuthenticated ? "Debes iniciar sesión para comprar" : ""}
          > 
            🛒 {isAuthenticated ? "Comprar" : "Inicia sesión para comprar"}
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
