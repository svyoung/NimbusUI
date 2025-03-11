"use client";
import Input from "../../components/Input";

const InputPage = () => {
    return (
        <div>
            <h1>Input (WIP)</h1>
            
            <p>
                The Input component is a WCAG-compliant form element designed for accessibility and usability. It ensures an inclusive user experience by following WCAG guidelines, including proper semantic HTML, clear and descriptive labels, sufficient color contrast, and keyboard navigability. The component supports screen readers with appropriate ARIA attributes, error messaging, and focus states to provide real-time feedback. It is designed to be flexible and user-friendly, making it easy for all users, including those with disabilities, to enter and review text input seamlessly. 
            </p>

            <Input name="a name" value="a value" onChange={() => {}} />
        </div>
    )
}

export default InputPage;