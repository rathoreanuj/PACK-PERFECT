import { useState } from "react";

import Form from './Form';
import PackingList  from './PackingList';
import  Logo from './Logo';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);
 
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item =>
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
      < Form onAddItems={handleAddItems} />
      < PackingList items={items} onDelete={handleDelete}
      onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      < Stats items={items} />
    </div>
  );
}



