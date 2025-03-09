import { useState, useRef } from "react";
import { ERROR, WARNING, SUCCESS, PRIMARY } from "@/lib/consts";
import styles from "./styles.module.scss";

const Button = (props) => {
    const { text, variant, disabled = false, loading, onChange } = props;

    const getColor = (variant) => {
        if(variant === PRIMARY) return styles["primary"];
        if(variant === SUCCESS) return styles["success"];
        if(variant === WARNING) return styles["warning"];
        if(variant === ERROR) return styles["error"];
        return;
    }
    return (
        <div>
            <button
                className={`${styles["nimbus-button"]} ${getColor(variant)} ${disabled && styles["disabled"]}`}
                onChange={onChange}
                type="button"
            >
                {text}
            </button>
        </div>
    )
}

export default Button;