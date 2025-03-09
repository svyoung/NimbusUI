
import { useState } from "react";
import styles from "./styles.module.scss";

const MobileHamburgerMenu = ({ toggleMenu, closeMenu }) => {
    // const [closeMenu, setCloseMenu] = useState(false);
    const onClick = () => {
        toggleMenu();
        setCloseMenu(!closeMenu);
    }
    return (
        <div className={styles["hamburger-wrapper"]} onClick={onClick}>
            <div className={`${styles["hamburger-line"]} ${closeMenu ? styles["line-1-close"] : ""}`}></div>
            <div className={`${styles["hamburger-line"]} ${closeMenu ? styles["line-2-close"] : ""}`}></div>
            <div className={`${styles["hamburger-line"]} ${closeMenu ? styles["line-3-close"] : ""}`}></div>
        </div>
    )
}

export default MobileHamburgerMenu;