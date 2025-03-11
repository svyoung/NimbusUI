import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Introduction</h1>

      <p>
        Hi there! You might have stumbled here because I listed this project in my Github account, which led you here! 
      </p>
      <p>
        Welcome! If that&apos;s the case and I hope you like what you see so far. It is still in intensive development so stay tuned! You can check out each component page, and anticipate for future creations because I&apos;ve got a lot of ideas!
      </p>
      <p>
        - Sam
      </p>
    </div>
  );
}
