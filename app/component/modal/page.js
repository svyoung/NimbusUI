"use client";

import { useState } from "react";
import Modal from "@/app/components/Modal";
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
            This is the Modal page

            <div className={styles["grid"]}>
                <div>
                    <button type="button" onClick={() => setIsModalOpen(true)}>Open Modal</button>
                    <Modal
                        open={isModalOpen}
                        onExit={() => setIsModalOpen(false)}
                        footer={{
                            buttons: [
                                <button key="hi">Button 1</button>,
                                <button key="there">Button 2</button>
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