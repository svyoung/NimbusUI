import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./styles.module.scss";

const Modal = (props) => {
    const { children, open, onExit, footer } = props;
    const { buttons } = footer;
    const modalContentRef = useRef(null);
    
    useClickOutside(modalContentRef, onExit);

    return open ? 
        <div className={styles["nimbus-modal-wrapper"]}>
            <div className={styles["overlay"]}></div>
            <div className={styles["modal-content"]} ref={modalContentRef} >
                <div className={styles["close"]} onClick={onExit}></div>
                <div className={styles["modal-main"]}>
                    {children}

                    
                </div>
                {footer &&
                    <div className={styles["modal-footer"]}>
                        {buttons.map(button => button)}
                    </div>
                }
            </div>
        </div>
    : null
}

export default Modal;