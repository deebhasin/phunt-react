export default function Product(props) {
  const name = props.name;
  const url = props.url;

  return (
    <div className="card">
      <img src={url} alt="Image1" />
      <h2>{name.toUpperCase()}</h2>
    </div>
  );
}
