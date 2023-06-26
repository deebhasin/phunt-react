import Product from "./Product";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://pdhuntall1-production-abfe.up.railway.app/api/product");
      const productsList = await response.json();
      setProducts(productsList);
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <Product
          key={product._id}
          name={product.name}
          shortDesc={product.shortDesc}
          icon={product.icon}
          url={product.url}
          upvotes={product.upvotes.length}
        />
      ))}
      ;
    </div>
  );
}
