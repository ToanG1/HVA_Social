import styles from './page.module.scss';

import { SideNav } from '@/components/SideNav';

export default function Direct() {
  return (
    <h1 className={styles.title}>
      <SideNav />
      Hello direct
    </h1>
  );
}
