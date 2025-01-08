import { useState } from 'react';
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';
import products from "../data";

const Store = () => {
  const [view, setView] = useState('cards');

  const toggleView = () => {
    setView((prevView) => (prevView === 'cards' ? 'list' : 'cards'));
  };

  return (
    <div className="store-container">
      <div className="view-switcher">
        <IconSwitch
          icon={view === 'cards' ? 'view_list' : 'view_module'}
          onSwitch={toggleView}
        />
      </div>
      
      {view === 'cards' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

export default Store;
