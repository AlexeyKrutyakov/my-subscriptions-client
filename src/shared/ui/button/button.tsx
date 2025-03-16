import styles from './button.module.css';
import ButtonProps from './types';

const Button = (props: ButtonProps) => {
  console.log(styles);
  return <button className={styles.btn}>{props.value}</button>;
};

export default Button;
