import { ReactNode } from 'react';

import styles from './page-layout.module.css';
interface PageLayoutProps {
  content?: ReactNode;
}

export const PageLayout = ({ content }: PageLayoutProps) => {
  return <div className={styles.main}>{content}</div>;
};
