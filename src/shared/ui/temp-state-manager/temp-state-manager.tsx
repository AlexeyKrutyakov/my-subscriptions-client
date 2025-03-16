import Button from '../button/button';
import styles from './temp-state-manager.module.css';

const TempStateManager = () => {
  return (
    <div className={styles.manager}>
      <h1>State manager (temp)</h1>
      <section className={styles.btns}>
        <Button value="Set role" />
      </section>
    </div>
  );
};

export default TempStateManager;
