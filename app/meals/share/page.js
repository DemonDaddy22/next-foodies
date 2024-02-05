import styles from './page.module.css';
import ShareMealForm from '@/components/ShareMealForm';

const ShareMeal = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <ShareMealForm />
      </main>
    </>
  );
}

export default ShareMeal;
