import React from 'react';
import styles from './index.module.scss';

type Props = {
  label: string;
  onClick: () => void;
};
const Button = ({ label, onClick, ...rest }: Props) => {
  return (
    <button type="button" onClick={onClick} {...rest} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
