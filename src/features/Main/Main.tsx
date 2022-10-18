import { FC } from 'react';
import styles from './Main.module.scss';
import { Button } from '@uikit/Button';

export const Main: FC = () => {
  return (
    <div className={styles.wrap}>
      <Button>Main</Button>
    </div>
  );
};
