import { useState } from "react";

const Form = ({ setZip }) => {
    const [input, setInput] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        setZip(input)
    }

    return (
        <div>
            <form className="mx-auto w-80 flex justify-between" onSubmit={onSubmit}> 
                <div>
                <input className="appearance-none border border-gray-400 py-0.5 px-5 focus:outline-none focus:border-blue-500 text-black mb-6" type="number" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>

                <div>
                <button className="bg-white hover:bg-gray-200 text-blue-400 py-0.5 px-4 uppercase" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
