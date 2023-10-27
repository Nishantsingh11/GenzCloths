import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Accounts from "./Components/Accounts/Accounts";
import WishList from "./Components/WishList/WishList";
import Cart from "./Components/Cart/Cart";
import Registration from "./Components/Registration/Registration";
import NotFound from "./Components/NotFound";
import FormForSeller from "./Components/ForSeller/FormForSeller";
import ItemsForSeller from "./Components/ForSeller/ItemsForSeller";
import ItembyCategory from "./Components/Category/ItembyCategory";
import SingleProduct from "./Components/Product/SingleProduct";
import { Toaster } from "react-hot-toast";
import Order from "./Components/Order/Order";
import OrderHistory from "./Components/Order/LastOrder";
import SingleOrder from "./Components/Order/SingleOrder";
import ShowAllCategory from "./Components/ShowAllCategory";
import ShowAllSubCategory from "./Components/ShowAllSubCategory";
import TermandCondtion from "./Components/Footer/TermandCondtion";
import Conactus from "./Components/Footer/Conactus";
import About from "./Components/Footer/About";
function App() {
  return (
    <div className="container mx-auto">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/seller/additem" element={<FormForSeller />} />
        <Route path="/seller/yourItem" element={<ItemsForSeller />} />
        <Route
          path="/category/:maincategory/:subcategory"
          element={<ItembyCategory />}
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<SingleOrder />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/showallcategory" element={<ShowAllCategory />} />
        <Route
          path="/showallsubcategory/:category"
          element={<ShowAllSubCategory />}
        />
        <Route path = "/term" element = {<TermandCondtion/>} />
        <Route path = "/contact" element = {<Conactus/>} />
        <Route path = "/about" element = {<About/>} />
      </Routes>
    </div>
  );
}

export default App;
