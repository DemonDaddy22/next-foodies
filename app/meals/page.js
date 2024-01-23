import Link from "next/link";

import styles from "./page.module.css";

const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose a recipe to start cooking.It is easy and fun!</p>
        <p className={styles.cta}>
          <Link
            href="/meals /
              share"
          >
            Share your favorite recipe
          </Link>{" "}
        </p>
      </header>
      <main className={styles.main}></main>
    </>
  );
};

export default Meals;
