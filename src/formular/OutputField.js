export default function OutputField({label, value}) {
    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                readOnly
            />
        </div>
    )
}