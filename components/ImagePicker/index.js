'use client';

import { useCallback, useRef, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();

  const [pickedImage, setPickedImage] = useState();

  const handleImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const handleImageChange = useCallback((event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No preview available</p>
          ) : (
            <Image src={pickedImage} alt="Image picked by user" fill />
          )}
        </div>
        <input
          ref={imageInput}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={styles.input}
          onChange={handleImageChange}
          required
        />
        <button type="button" className={styles.button} onClick={handleImageUpload}>Pick an image</button>
      </div>
    </div>
  );
};

export default ImagePicker;
