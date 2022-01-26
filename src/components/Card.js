function Card(props) {
  return (
    <div className="card">
      <img src={props.image} width="250" height="180" alt="Flag" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
      </div>
    </div>
  );
}

export default Card;
