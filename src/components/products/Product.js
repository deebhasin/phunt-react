export default function Product(props) {
  // handleOpenModal = (id) => {
  //   console.log("Opening Modal", id);
  //   props.openModal(id);
  // }

  return (
    <>
      <div className="row">
        <div className="left">
          <div className="icon" onClick={(id) => props.openModal(props.id)}>
            <img src={props.icon} alt="" className="logo" />
          </div>

          <div className="details">
            <div className="name">
              <a href={props.url} target="_blank" rel="noreferrer">
                {props.name}
              </a>
            </div>
            <div className="heading">{props.shortDesc}</div>
          </div>
        </div>
        <div className="upvote" onClick={() => props.handleUpvote(props.id)}>
          {props.upvotes}
        </div>
      </div>
    </>
  );
}
