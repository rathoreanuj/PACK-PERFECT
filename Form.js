import { useState } from "react";


export default function Form({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem);  

        onAddItems(newItem);

        // AFTER SET BOTH OF THEM AS INTITIAL STAGE 
        // for upcoming new item 
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3> Choose Quantity Of Your Item & Add them. </h3>
            {/* // onchange IT WILL GIVE AN EVENT e , TARGET -> VALUE */}
            {/* INTITALLLY VALUE -> value  */}
            {/* onchange -> set this quatntity */}
            <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map(num => (
                        // FPR MY OPTIONS VALUES ARE THIS 
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
            </select>

            <input type='text' placeholder="Item..." value={description}
                onChange={(e) =>
                    // console.log(e.target);// APNA PURA INPUT ELE HAI 
                    // console.log(e.target.value); // jo apni list ki DESCRIPTION HAI WO HAI YE
                    setDescription(e.target.value)
                }
            />
            {/* DON'T CALL THE FUNC , BECAUSE REACT CALL THE FUNC FOR US ,REACT IS SO KIND 😘😘😘 */}
            <button > ADD</button>
        </form>
    );
}
