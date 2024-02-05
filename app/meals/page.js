import Link from "next/link";
import { Suspense } from "react";

import styles from "./page.module.css";
import MealItems from "@/components/MealItems";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse the meals shared by our vibrant community.",
};

const Meals = async () => {
  const meals = await getMeals();

  return (
    <MealItems meals={meals} />
  );
};

const MealsGrid = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose a recipe to start cooking. It is easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsGrid;
