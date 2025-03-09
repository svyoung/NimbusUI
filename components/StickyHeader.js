"use client";

import { useState } from 'react';
import Link from 'next/link';
import ComponentMenu from './ComponentsMenu';
import MobileHamburgerMenu from './MobileHamburgerMenu';
import styles from "./styles.module.scss";

const StickyHeader = ({ toggleMenu }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return <>
        <div className={styles["header-wrapper"]}>
            <Link href="/" className={styles["nimbus-title"]}>nimbus <span>UI</span></Link>
            <span className={styles["by-svy"]}>Created by Sam Vicki Young</span>
            <MobileHamburgerMenu closeMenu={showMobileMenu} toggleMenu={() => setShowMobileMenu(!showMobileMenu)} />
        </div>
        <ComponentMenu isMobile={true} showMobileMenu={showMobileMenu} exitMenu={() => setShowMobileMenu(false)} />
    </>
};

export default StickyHeader;