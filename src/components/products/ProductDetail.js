import "./product.css";
import { useState, useEffect } from "react";

export default function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [something, setSomething] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://pdhuntall1-production-abfe.up.railway.app/api/product/" + props.id);
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [props.id]);

  return (
    <main className="modal-content">
      <div className="top">
        <div className="left">
          <div className="icon">
            <img src={product.icon} alt="" className="logo" />
          </div>

          <div className="name">{product.name}</div>
          <div className="heading">{product.shortDesc}</div>
        </div>
        <div className="right">
          <div className="visit">
            <a href={product.url} target="_blank" rel="noreferrer">
              Visit
            </a>
          </div>
          <div className="upvote">upvote {product.upvotes?.length}</div>
        </div>
      </div>
      <div className="desc">{product.description}</div>
      <div className="images">
        <img src="https://ph-files.imgix.net/0fe57a1e-c080-4a0d-8c1a-ff32cc5e7bd3.png" alt="" />
        <img src="https://ph-files.imgix.net/ad80a3a9-b865-4b3a-9da8-6f9b4c2515b9.png" alt="" />
      </div>
      <div className="comments">Comment</div>
    </main>
  );
}
