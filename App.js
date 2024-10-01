import { useState } from "react";

// when we do default export 
import Form from './Form';
import PackingList  from './PackingList';
import  Logo from './Logo';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  // IT SHOULD ADD CURR ITEMS + NEW ITEMS 
  // SPREAD OPERATOR 
  // IMMUTABLE WAY OF CHANGING A ARRAY // NOT MUTABLE 
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    // IF COND IS TRUE THEN MERE ARR ME ITEM DALO 
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    // INTIALLY  item.packed-> is false 
    setItems(items => items.map(item =>
      // IF COND IS TRUE , THAT IS THE ITEM WHAT WE WANT TO UPDATE 
      //  SO WE CREATED A BRAND NEW ITEM , USING THAT CURR ITEM 
      // USIGN ...  , AND CHANGING THE STATIS OF PACKED 
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
  }

  function handleClearList(){
    const confirmed = window.confirm('Are You sure to Clear Your List ??? ') ;

    if(confirmed) setItems([]);
  }


  return (
    <div className="app" >
      < Logo />
      {/*  PASSING PROPS  */}
      < Form onAddItems={handleAddItems} />
      < PackingList items={items} onDelete={handleDelete}
      onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      < Stats items={items} />
    </div>
  );
}



