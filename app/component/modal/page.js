"use client";

import { useState } from "react";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import styles from "./styles.module.scss"

const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const options = [
        {name: "option 1", value: "option 1"},
        {name: "option 2", value: "option 2"},
        {name: "option 3", value: "option 3"},
    ]
    return (
        <div>
            <h1>Modal (WIP)</h1>
            
            <p>
                This is a fully customizable modal component designed for flexibility and seamless user interactions. It supports dynamic styling, allowing users to adjust colors, sizes, and animations to match their design needs. The component includes an async loading state with a built-in indicator, ensuring a smooth user experience during asynchronous operations like form submissions or data fetching. Additional features include backdrop control, keyboard accessibility, closable options, and support for rich content such as forms, images, and dynamic elements. This modal enhances UI consistency and usability while maintaining high performance.
            </p>

            <div className={styles["grid"]}>
                <div>
                    <Button variant="primary" onClick={() => setIsModalOpen(true)} text="Open Modal" />
                    <Modal
                        open={isModalOpen}
                        title="a title"
                        onExit={() => setIsModalOpen(false)}
                        footer={{
                            buttons: [
                                <Button key="hi" text="Button 1" />,
                                <Button key="there" text="Button 2" />
                            ]
                        }}
                    >
                        this is the content
                    </Modal>
                </div>
                <div>
                    
                </div>
                
            </div>           
        </div>
    )
}

export default ModalPage;