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
            This is the Modal page

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