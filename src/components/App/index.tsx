import React, { useState } from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.App}>
      <h1>React Template with webpack</h1>
      <div className={styles.ButtonGroup}>
        <Button label="+" onClick={() => setCounter(counter + 1)} />
        <Button label="-" onClick={() => setCounter(counter - 1)} />
      </div>
      <span>{counter}</span>
    </div>
  );
};
export default App;
