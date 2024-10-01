import { useState } from "react";
import Item from './Item';

export default function PackingList({ items, onDelete, onToggleItem, onClearList }) {
    return (
        <div className="list" >
            <ul >
                {items.map(itm =>
                    <Item itemObj={itm} onDelete={onDelete} onToggleItem={onToggleItem} key={itm.id} />)}
            </ul>

            <div className="actions">
                <button onClick={onClearList}> Reset List</button>
            </div>
        </div>
    );
}
