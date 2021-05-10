import { useState } from "react";

const Form = ({ setZip }) => {
    const [input, setInput] = useState("")

    const onSubmit = () => {
        setZip(input)
    }

    return <div></div>
}

export default Form;
