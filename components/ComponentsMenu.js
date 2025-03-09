"use client";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { capitalizeAllFirstLetters } from "@/utils/helpers";
import { componentUrlPrefix } from "@/lib/variables";
import { componentList } from "@/lib/variables";
import styles from "./styles.module.scss";

const ComponentMenu = ({ isMobile, showMobileMenu, exitMenu }) => {
    const onClick = () => {
        if(isMobile) exitMenu();
    }
    const pathname = usePathname();
    return <div className={`${styles["component-list-menu"]} ${isMobile ? styles["menu-mobile"] : ""} ${showMobileMenu ? styles["show-mobile-menu"] : ""}`}>
                <Link href="/"><h2 className={styles["component-list-header"]}>Components</h2></Link>
                {
                    componentList.map(component => {
                        const currPath = `${componentUrlPrefix}/${component.url}`
                        const isCurrentPath = pathname === currPath;
                        return (
                            <div key={component.name} onClick={onClick}>
                                <div className={`${styles["component-item"]} ${isCurrentPath ? styles["current-path"] : ""}`}>
                                    <Link href={currPath}>
                                        {capitalizeAllFirstLetters(component.name)}
                                    </Link>
                                </div>
                            </div>    
                    )})
                }
        </div>  
};

export default ComponentMenu;