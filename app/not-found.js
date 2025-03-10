'use client';

import styles from "./page.module.scss"
 
export default function Error() {
  return (
    <div className={styles["error-page-wrapper"]}>
      <h2>Oops! No page found. Will be working on it soon so stay tuned...</h2>
    </div>
  )
}