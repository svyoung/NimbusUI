import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./styles.module.scss";

const Dropdown = (props) => {
    const [showOptions, setShowOptions] = useState(false);
    const { options, defaultValue, loading, onSelect } = props;
    const optionsRef = useRef(null);

    useClickOutside(optionsRef, () => setShowOptions(false));

    return (
        <div>
            <div ref={optionsRef} className={`${styles["nimbus-dropdown-wrapper"]}`}>
                {loading && <div className={styles["loading-spinner"]}></div>}
                <div className={`${styles["default-option"]} ${loading && styles["no-pointer-events"]}`} onClick={() => setShowOptions(!showOptions)}>
                    {
                        !loading && <>
                            <span>{defaultValue || "Select an option"}</span>
                            <div className={styles["arrow-icon"]}>▼</div>
                        </>
                    }
                </div>
                <div className={`${styles["options-wrapper"]} ${showOptions && styles["show"]}`}>
                    {options.map(option => (
                        <div key={option.name} className={styles["option-list"]} onClick={() => onSelect(option.value)}>{option.name}</div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

//  ${showOptions ? styles["show"] : ""}

export default Dropdown;