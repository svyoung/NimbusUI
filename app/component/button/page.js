"use client";
import Button from "@/app/components/Button";
import styles from "./styles.module.scss"

const ButtonPage = () => {
    return (
        <div>
            <h1>Button</h1>

            <div className={styles["grid"]}>
                <div>
                    A default button:
                    <Button text="Default" onClick={() => {}} />
                </div>
                <div>
                    An async loading button
                    <Button loading={true} text="Loading" onClick={() => {}} />
                </div>
                <div>
                    A disabled button
                    <Button disabled={true} text="Disabled" onClick={() => {}} />
                </div>
                <div>
                    A primary button
                    <Button variant="primary" text="Primary" onClick={() => {}} />
                </div>
                <div>
                    A button with error mode
                    <Button variant="error" text="Danger mode" onClick={() => {}} />
                </div>
                <div>
                    A button with success mode
                    <Button variant="success" text="Success mode" onClick={() => {}} />
                </div>
                <div>
                    A button with warning mode
                    <Button variant="warning" text="Warning mode" onClick={() => {}} />
                </div>
            </div>           
        </div>
    )
}

export default ButtonPage;