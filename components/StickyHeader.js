"use client";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import styles from "./styles.module.scss";

const StickyHeader = () => {
    const pathname = usePathname();

    return <div className={styles["header-wrapper"]}>
        <span className={styles["nimbus-title"]}>nimbus <span>UI</span></span>
        <span>Created by Sam Vicki Young</span>
    </div>
};

export default StickyHeader;