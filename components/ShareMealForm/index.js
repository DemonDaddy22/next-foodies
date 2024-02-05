'use client'; 

import { useFormState } from 'react-dom';

import { shareMeal } from "@/lib/actions";
import ImagePicker from "../ImagePicker";
import styles from './styles.module.css';
import ShareMealFormSubmit from "../ShareMealFormSubmit";

const ShareMealForm = () => {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker name="image" label="Your image" />
      {state.message && <p>{state.message}</p>}
      <p className={styles.actions}>
        <ShareMealFormSubmit />
      </p>
    </form>
  );
};

export default ShareMealForm;
