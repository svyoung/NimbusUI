"use client";
import Dropdown from "../../components/Dropdown";
import styles from "./styles.module.scss"

const DropdownPage = () => {
    const options = [
        {name: "option 1", value: "option 1"},
        {name: "option 2", value: "option 2"},
        {name: "option 3", value: "option 3"},
    ]
    return (
        <div>
            <h1>Dropdown</h1>
            <p>
                The Dropdown component is a dynamic and accessible UI element with asynchronous loading capabilities. It allows users to select options from a list while efficiently handling large datasets or remote data sources. The component supports async fetching, ensuring options are loaded dynamically as needed, improving performance and user experience. It includes accessibility features such as keyboard navigation, screen reader support, and proper ARIA attributes, making it WCAG-compliant. With features like search, debounced API calls, and loading indicators, this dropdown ensures a smooth and responsive selection process.
            </p>

            <div className={styles["grid"]}>
                <div>
                    <Dropdown options={options} loading={false} />
                </div>
                <div>
                    <Dropdown options={options} loading={true} />
                </div>
                
            </div>           
        </div>
    )
}

export default DropdownPage;