import styles from './page.module.scss';

import SideNav from '@/components/sideNav/sideNav';
import { PostItem } from '@/components/PostItem';

export default function Home() {
  return (
    <>
      <SideNav />
      <h1 className={styles.homeContainer}>Hello world</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <PostItem key={i} />
      ))}
    </>
  );
}
