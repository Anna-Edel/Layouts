import { useState } from 'react';
import './Store.css';
import products from './components/data';
import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';

function Store() {
  const [icon, setIcon] = useState("view_list");

  const onSwitch = () => {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  };

  return (
    <div>
      <IconSwitch icon={icon} onSwitch={onSwitch}/>
      {icon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default Store;
