import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useStateValues } from "./Utils/Provider";
import { useEffect } from "react";
import AllRelatedRecipes from "./pages/AllRelatedRecipes";
import Description from "./pages/Description";
import Shop from "./pages/Shop";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Deatils";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";



function App() {

  const [{ abc }, dispatch] = useStateValues();

  if (abc) {
    console.log(abc);
  }

  useEffect((() => {
    const data = localStorage.getItem("token");
    let cart = localStorage.getItem("cart");

    if (data) {

      dispatch({
        type: "SET_TOKEN",
        token: (JSON.parse(localStorage.token)),
      });

      dispatch({
        type: "SET_USER",
        user: (JSON.parse(localStorage.user)),
      });

    }
    else {
      dispatch({
        type: "SET_USER",
        user: null,
      })
    }

    if (cart) {
      cart = JSON.parse(localStorage.cart)
      dispatch({
        type: "SET_CART_DATA",
        cartData: (cart),

      })
    }
  
    dispatch({
      type: "SET_TOTAL_AMOUNT",
      totalAmt: 0,
    })

  }
  ), [dispatch])


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/description" element={<Description />} />
        <Route path="/food/:id" element={<Details />} />
        <Route path="/:query" element={<AllRelatedRecipes />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
