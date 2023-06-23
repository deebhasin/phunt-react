import Product from "./Product";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "Joshua Plate",
    price: 100,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "DB Plate",
    price: 200,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    name: "XYZ Plate",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80",
    name: "ALPHA Plate",
    price: 400,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    name: "Joshua Plate",
    price: 500,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "Joshua2 Plate",
    price: 600,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "JoshuaNew Plate",
    price: 700,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8ffGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    name: "MyJoshua Plate",
    price: 800,
  },
];

const ProductList = () => {
  return (
    <>
      {products.map((product) => (
        <Product name={product.name} url={product.image} />
      ))}
    </>
  );
};

export default ProductList;
