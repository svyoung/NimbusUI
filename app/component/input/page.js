"use client";
import Input from "../../components/Input";

const InputPage = () => {
    return (
        <div>
            <h1>Input</h1>
            
            This is the input page

            <Input name="a name" value="a value" onChange={() => {}} />
        </div>
    )
}

export default InputPage;