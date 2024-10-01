// static part of all the componenets 

// its parent is -> paking list
// grand parent -> app
export default function Item({ itemObj, onDelete, onToggleItem }) {
    return (
      <li>
        <input type="checkbox" value={itemObj.packed} onChange={() => onToggleItem(itemObj.id)} />
  
        <span style={itemObj.packed ? { textDecoration: 'line-through' } : {}}>
          {itemObj.quantity} {itemObj.description}
        </span>
  
        <button onClick={() => onDelete(itemObj.id)} > ❌ </button>
      </li>
    );
  }
  