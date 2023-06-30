import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import ProductDetail from "./components/products/ProductDetail";
import { useRef, useState } from "react";
import Login from "./components/login/Login";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [productId, setProductId] = useState("");
  const modalRef = useRef(null);

  const openModal = (id) => {
    console.log("Opening Modal", id);
    modalRef.current.style.display = "block";
    // props.openModal(props.id);
    setShowDetails(true);
    setProductId(id);
  };

  window.onclick = function (event) {
    if (event.target.className === "modal") {
      setShowDetails(false);
      modalRef.current.style.display = "none";
    }
  };

  return (
    <>
      <Header />
      <Login />
      <Products openModal={openModal} />
      <div ref={modalRef} className="modal">
        {showDetails && <ProductDetail id={productId} />}
      </div>
    </>
  );
}

export default App;
