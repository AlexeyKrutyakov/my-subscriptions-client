import Button from '../../shared/ui/button/button';
import styles from './styles.module.css';

export function UnauthPage() {
  return (
    <>
      <section className={styles.btns}>
        <Button value="Login" />
        <Button value="Registration" />
      </section>
    </>
  );
}
