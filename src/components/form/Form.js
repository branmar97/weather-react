import { useState } from "react";

const Form = ({ setZip }) => {
    const [input, setInput] = useState("")

    const onSubmit = () => {
        setZip(input)
    }

    return (
        <div>
            <form onSubmit={onSubmit}> 
                <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form;
