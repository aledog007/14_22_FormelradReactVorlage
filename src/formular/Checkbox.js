import {useState} from "react";

export default function Checkbox({label, value, handleChange}) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={handleChange}
                />{label}
            </label>
        </div>
    )
}