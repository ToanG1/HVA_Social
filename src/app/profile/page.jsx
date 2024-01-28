'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import SideNav from '@/components/SideNav/SideNav';

function removeActive() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.remove(styles.active);
  });
}

export default function Profile() {
  const [page, setPage] = useState(0);

  function renderPage() {
    switch (page) {
      case 0:
        return <h2>Posts</h2>;
      case 1:
        return <h2>Reel</h2>;
      case 2:
        return <h2>Tagged</h2>;
      default:
        return <h2>Posts</h2>;
    }
  }
  return (
    <>
      <SideNav />
      <h1 className={styles.profileContainer}>
        <button
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.active);
            setPage(0);
          }}
        >
          Post
        </button>
        <button
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.active);
            setPage(1);
          }}
        >
          Reel
        </button>
        <button
          onClick={(e) => {
            removeActive();
            e.currentTarget.classList.add(styles.active);
            setPage(2);
          }}
        >
          Tagged
        </button>
        <div>{renderPage()}</div>
      </h1>
    </>
  );
}
