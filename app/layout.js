import Link from "next/link";
import "./globals.scss";
import styles from "./page.module.scss"
import StickyHeader from "@/components/StickyHeader";
import ComponentMenu from "@/components/ComponentsMenu";
import { pacifico, afacad } from "./fonts";

export const metadata = {
  title: "Nimbus UI",
  description: "Sam's component library yeah!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${afacad.variable}`}>
      <main className={styles.main}>
          <header>
            <StickyHeader />
          </header>
          <div className={styles["main-content"]}>
            <aside className={styles["sidebar"]}>
              <ComponentMenu />
            </aside>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
