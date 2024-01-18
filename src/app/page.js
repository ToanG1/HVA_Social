import styles from './page.module.scss';

import { PostItem } from '@/components/PostItem';

export default function Home() {
  return (
    <h1 className={styles.title}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <PostItem key={i} />
      ))}
    </h1>
  );
}
