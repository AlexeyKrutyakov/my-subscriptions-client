import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { userRole } from '../../shared/types/common.types';
import styles from './styles.module.css';

export function ProfilePage() {
  const role = useAppSelector(state => state.user.role);

  if (role === userRole.CLIENT) {
    return (
      <section className={styles.client_profile_section}>
        Client Profile
      </section>
    );
  }

  if (role === userRole.ADMIN) {
    return (
      <section className={styles.admin_profile_section}>Admin Profile</section>
    );
  }

  return <Navigate to="/" />;
}
