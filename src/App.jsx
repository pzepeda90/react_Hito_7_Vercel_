import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Pizza } from './pages/Pizza/Pizza';
import Cart from './pages/Cart/Cart';
import Register_Page from './pages/Register_Page/Register_Page';
import Login_Page from './pages/Login_Page/Login_Page';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { PublicRoute } from './components/ProtectedRoute/ProtectedRoute';
import Swal from 'sweetalert2/dist/sweetalert2.js'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register_Page />
                </PublicRoute>
              } 
            />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login_Page />
                </PublicRoute>
              } 
            />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;