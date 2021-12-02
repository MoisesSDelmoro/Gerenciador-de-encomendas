import React from 'react';
import styles from './button.module.css';

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
export default Button;

function ButtonAcc({ children, ...props }) {
  return (
    <button {...props} className={styles.buttonAcc}>
      {children}
    </button>
  );
}

function ButtonSalvar({ children, ...props }) {
  return (
    <button {...props} className={styles.buttonSave}>
      {children}
    </button>
  );
}

export {
  Button,
  ButtonAcc,
  ButtonSalvar
}