import './App.css'
import { BrowserRouter, Route, Routes, Link } from './mini-router'
import Cart from './views/Cart'
import Confirmation from './views/Confirmation'
import Home from './views/Home'
import HomeWithCart from './views/HomeWithCart'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Payment from './views/Payment'
import ProfileEdit from './views/ProfileEdit'
import Signup from './views/Signup'
import UserHistory from './views/UserHistory'

const QuickNav = () => (
  <div className="section">
    <div className="section-inner flex flex-wrap gap-3 items-center">
      <span className="title-label">Routes</span>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order-summary">Order Summary</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/history">History</Link>
      <Link to="/confirmation">Confirmation</Link>
      <Link to="/404">404</Link>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-12">
        <QuickNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<HomeWithCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary" element={<Payment />} />
          <Route path="/profile" element={<ProfileEdit />} />
          <Route path="/history" element={<UserHistory />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
