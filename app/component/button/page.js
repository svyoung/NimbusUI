"use client";
import Button from "@/app/components/Button";
import styles from "./styles.module.scss"

const ButtonPage = () => {
    return (
        <div>
            This is the Button page

            <div className={styles["grid"]}>
                <div>
                    <Button text="Default" onClick={() => {}} />
                </div>
                <div>
                    <Button disabled={true} text="Disabled" onClick={() => {}} />
                </div>
                <div>
                    <Button variant="primary" text="Primary" onClick={() => {}} />
                </div>
                <div>
                    <Button variant="error" text="Danger mode" onClick={() => {}} />
                </div>
                <div>
                    <Button variant="success" text="Success mode" onClick={() => {}} />
                </div>
                <div>
                    <Button variant="warning" text="Warning mode" onClick={() => {}} />
                </div>
            </div>           
        </div>
    )
}

export default ButtonPage;