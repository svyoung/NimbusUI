import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./styles.module.scss";

const Dropdown = (props) => {
    const [showOptions, setShowOptions] = useState(false);
    const { options, defaultValue, loading, onSelect } = props;
    const optionsRef = useRef(null);

    useClickOutside(optionsRef, () => setShowOptions(false));

    const selectOption = (value) => {
        if(onSelect) onSelect(value);
        setShowOptions(!showOptions);
    }

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
                <div className={`${styles["options-wrapper"]} ${showOptions && styles["show"]}`} role="listbox">
                    {options.map(option => (
                        <div key={option.name} role="option" aria-selected={defaultValue === option.name} tabIndex="0" className={styles["option-list"]} onClick={() => selectOption(option.value)} ariaRole="list-box">{option.name}</div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Dropdown;