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
            This is the Dropdown page

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