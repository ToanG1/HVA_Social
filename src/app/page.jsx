import styles from './page.module.scss';

import SideNav from '@/components/sideNav/sideNav';

export default function Home() {
  return (
    <>
      <SideNav />
      <h1 className={styles.homeContainer}>Hello world</h1>
    </>
  );
}
