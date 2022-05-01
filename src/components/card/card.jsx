import './card.css';

function Card({ cat }) {
  const { id, name, email } = cat;

  return (
    <div className="card" key={id}>
      <img src={`https://robohash.org/${name}?set=set4&size=180x180`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;