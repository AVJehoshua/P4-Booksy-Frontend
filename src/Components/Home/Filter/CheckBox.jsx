import { useState } from "react";


export const CheckBox = ({ categories, selected, setAddCategory, setRemoveCategory }) => {
    const handleChange = (event) => {
        if (event.target.checked) {
            setAddCategory(categories);
        } else {
            setRemoveCategory(categories);
        }
    };

    return (
        <label className="category-item">
            {categories}
            <input type="checkbox" onChange={handleChange} checked={selected} />
            <span className="checkmark"></span>
        </label>
    );
};

