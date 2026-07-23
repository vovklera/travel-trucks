import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.intro}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
        </div>
      </main>
    </div>
  );
}
