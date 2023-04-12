export default function InputField({label, value, handleChange, color}) {
    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                min="0.00" step="0.05"
                style={{color}}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}