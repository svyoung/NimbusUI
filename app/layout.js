import "./globals.scss";
import styles from "./page.module.scss"
import ComponentMenu from "@/components/ComponentsMenu";
import { componentList } from "@/lib/variables";

export const metadata = {
  title: "Nimbus UI",
  description: "Sam's component library yeah!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className={styles.main}>
          <aside id="sidebar" className={styles["component-list-menu"]}>
            <ComponentMenu components={componentList} />
          </aside>
          <div className={styles.content}>
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}
