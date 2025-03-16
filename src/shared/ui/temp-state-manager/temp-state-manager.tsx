import { useAppDispatch } from '../../../app/hooks';
import styles from './temp-state-manager.module.css';
import { setUser, setUserRole } from '../../../entities/user/model/user';
import { User } from '../../../entities/user/types';
import { userRole } from '../../../shared/types/common.types';

const user: User | null = {
  _id: '123',
  name: 'Alex',
  avatar: 'avatar',
  role: userRole.ADMIN,
  // role: userRole.CLIENT,
};

const TempStateManager = () => {
  const dispatch = useAppDispatch();

  const setUserHandler = () => {
    dispatch(setUser(user));
    dispatch(setUserRole(user.role));
  };

  return (
    <div className={styles.manager}>
      <h1>State manager (temp)</h1>
      <section className={styles.btns}>
        <button onClick={setUserHandler}>Set user and role</button>
      </section>
    </div>
  );
};

export default TempStateManager;
