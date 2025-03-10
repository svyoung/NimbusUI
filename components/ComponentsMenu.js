"use client";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { capitalizeAllFirstLetters } from "@/utils/helpers";
import { componentUrlPrefix } from "@/lib/variables";
import { componentList } from "@/lib/variables";
import styles from "./styles.module.scss";

const ComponentMenu = ({ isMobile, showMobileMenu, exitMenu }) => {  
    const pathname = usePathname();

    const formattedList = {};
    componentList.forEach(component => {
        formattedList[component.category] = [...formattedList[component.category] || "", { name: component.name, url: component.url}]
    });

    const onClick = () => {
        if(isMobile) exitMenu();
    }
    
    return <div className={`${styles["component-list-menu"]} ${isMobile ? styles["menu-mobile"] : ""} ${showMobileMenu ? styles["show-mobile-menu"] : ""}`}>
                <Link href="/"><h2 className={styles["component-list-header"]}>Components</h2></Link>
                {Object.entries(formattedList).map(([category, _]) => {
                    return <div key={category}>
                        <h2>{capitalizeAllFirstLetters(category)}</h2>
                        {
                            formattedList[category].map(component => {
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
                                )
                            })
                        }
                    </div>                  
                })}
        </div>  
};

export default ComponentMenu;