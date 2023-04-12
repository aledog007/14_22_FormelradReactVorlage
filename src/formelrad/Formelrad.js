import formelrad from "../image/formelradelektronik.gif";

export default function Formelrad() {
    return (
        <>
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            <form>
                <div>
                    <label>Spannung</label><input></input>
                </div>
                <div>
                    <label>Strom</label><input></input>
                </div>
                <div>
                    <label>Widerstand</label><input></input>
                </div>
                <button type="submit">Calculate</button>
            </form>
        </>
    )
}