import { useState, useRef } from "react";
import { ERROR, WARNING, SUCCESS, PRIMARY } from "@/lib/consts";
import styles from "./styles.module.scss";

const Button = (props) => {
    const { text, variant, disabled = false, loading = false, onClick } = props;

    if(!text) return;

    const getColor = (variant) => {
        if(variant === PRIMARY) return styles["primary"];
        if(variant === SUCCESS) return styles["success"];
        if(variant === WARNING) return styles["warning"];
        if(variant === ERROR) return styles["error"];
        return;
    }
    return (
        <button
            className={`${styles["nimbus-button"]} ${getColor(variant)} ${disabled && styles["disabled"]}`}
            onClick={onClick}
            type="button"
        >
            {loading ?
                <div className={styles["loading-spinner"]}></div>
                : text
            }
        </button>
    )
}

export default Button;