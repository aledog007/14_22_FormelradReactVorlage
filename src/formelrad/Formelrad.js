import { useState } from "react";
import '../css/mvp.css';
import InputField from "../formular/InputField";
import formelrad from "../image/formelradelektronik.gif";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: ""
    })

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
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
            </section>
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            <form>
                <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                <InputField color={"black"} value={values.i} label="Stromstaerke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                <button type="submit">Calculate</button>
            </form>
        </>
    )
}