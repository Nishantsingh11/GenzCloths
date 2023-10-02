import {   BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Accounts from './Components/Accounts/Accounts';
import WishList from './Components/WishList/WishList';
import Cart from './Components/Cart/Cart';
import Registration from './Components/Registration/Registration';
import NotFound from './Components/NotFound';
function App() {
  return (
    <div className="container mx-auto">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path = "*" element = {<NotFound />} />
      <Route path = "/" element = {<Home />} />
      <Route path = "/account" element = {<Accounts />} />
      <Route path = "/wishlist" element = {<WishList />} />
      <Route path = "/cart" element = {<Cart />} />
      <Route path = "/registration" element = {<Registration />} />
      </Routes>     
     </BrowserRouter>
      </div>
  );
}

export default App;