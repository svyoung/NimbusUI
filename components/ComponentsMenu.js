"use client";

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { capitalizeAllFirstLetters } from "@/utils/helpers";
import { componentUrlPrefix } from "@/lib/variables";
import styles from "./styles.module.scss";

const ComponentMenu = ({ components }) => {
    const pathname = usePathname();
    if (!components) return;
    console.log("pathname", pathname);
    return components.map(component => {
        const currPath = `${componentUrlPrefix}/${component.url}`
        const isCurrentPath = pathname === currPath;
        console.log("isCurrentPath", isCurrentPath, pathname)
        return (
            <div key={component.name}>
                <div className={`${styles["component-item"]} ${isCurrentPath ? styles["current-path"] : ""}`}>
                    <Link href={currPath}>
                        {capitalizeAllFirstLetters(component.name)}
                    </Link>
                </div>
            </div>
    )})
};

export default ComponentMenu;