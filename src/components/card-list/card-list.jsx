import Card from '../card/card';

import './card-list.css';

function CardList({ cats }) {
  return (
    <div className="card-list">
      {cats.map((cat) => 
        <Card key={cat.id} cat={cat} />
      )}
    </div>
  );
}

export default CardList;