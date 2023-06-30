import Product from "./Product";
import { useState, useEffect } from "react";

export default function Products(props) {
  const [products, setProducts] = useState([]);

  const [hasErrors, setHasErrors] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleUpvote = async (id) => {
    let header = new Headers();
    header.append("Authorization", "Bearer " + localStorage.getItem("token"));
    header.append("Content-Type", "application/json");

    const url = `https://pdhuntall1-production-abfe.up.railway.app/api/product/${id}/vote`;
    console.log("Upvoted..sending data to DB", url);

    const token = localStorage.getItem("token");

    console.log("token", token);
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: header,
      });
      const data = await response.json();
      console.log(data);

      setErrors([]);
      setHasErrors(false);
    } catch (error) {
      setHasErrors(true);
      setErrors(error);
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://pdhuntall1-production-abfe.up.railway.app/api/product");
        const productsList = await response.json();
        setProducts(productsList);
      } catch (error) {
        setHasErrors(true);
        setErrors(error);
      }
    }

    fetchProducts();
  }, [errors]);

  console.log("Rendering Products List ");
  let jsxError = <div className="error">There are errors</div>;
  let jsxBody = (
    <div className="container">
      {products.map((product) => (
        <Product
          key={product._id}
          name={product.name}
          shortDesc={product.shortDesc}
          icon={product.icon}
          url={product.url}
          upvotes={product.upvotes.length}
          id={product._id}
          handleUpvote={handleUpvote}
          openModal={props.openModal}
        />
      ))}
    </div>
  );

  return <>{!hasErrors ? jsxBody : jsxError}</>;
}
