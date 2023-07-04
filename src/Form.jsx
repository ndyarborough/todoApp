import { useState } from "react";

export function Form(props) {
    const [newItem, setNewItem] = useState("hkjh");


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(newItem === "") return
        
        props.onSubmit(newItem)
        setNewItem("");
      }

    return (
        <form className='new-item-form'>
            <div className="form-row">
                <label htmlFor="">New Item</label>
                <input
                    value={newItem}
                    type="text"
                    onChange={e => setNewItem(e.target.value)} />
                <button onClick={handleSubmit} className="add-todo">Add</button>
            </div>
        </form>
    );
}