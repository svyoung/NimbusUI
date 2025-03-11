"use client";
import Button from "@/app/components/Button";
import styles from "./styles.module.scss"

const ButtonPage = () => {
    return (
        <div>
            <h1>Button</h1>

            <p>
                This is a highly customizable button component designed for flexibility and performance. It supports dynamic coloring, allowing users to define primary, secondary, and custom color themes. The component also includes an async loading state with a built-in indicator, ensuring a smooth user experience during asynchronous operations. Additional features include size variations, icon support, disabled states, and accessibility enhancements. Ideal for modern front-end applications, this button component ensures consistency and usability across different UI elements.
            </p>

            <div className={styles["items"]}>
                A default button: <br />
                <Button text="Default" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                An async loading button <br />
                <Button loading={true} text="Loading" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                A disabled button <br />
                <Button disabled={true} text="Disabled" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                A primary button <br />
                <Button variant="primary" text="Primary" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                A button with error mode <br />
                <Button variant="error" text="Danger mode" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                A button with success mode <br />
                <Button variant="success" text="Success mode" onClick={() => {}} />
            </div>
            <div className={styles["items"]}>
                A button with warning mode <br />
                <Button variant="warning" text="Warning mode" onClick={() => {}} />
            </div>
        </div>           
    )
}

export default ButtonPage;