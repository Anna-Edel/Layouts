import PropTypes from 'prop-types';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <div key={card.id || index} className="card-el">
          <img src={card.img} alt={card.name} />
          <div className="bottom">
            <h3>{card.name}</h3>
            <span>{card.color}</span>
            <span>${card.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsView;
