import styles from './page.module.scss';

import SideNav from '@/components/SideNav/SideNav';
import { PostItem } from '@/components/PostItem';

export default function Home() {
  return (
    <>
      <SideNav />
      <div className={styles.homeContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <PostItem key={i} />
        ))}
      </div>
    </>
  );
}
