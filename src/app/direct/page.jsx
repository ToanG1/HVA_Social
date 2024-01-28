'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DirectBox from '@/components/DirectBox/DirectBox';
import SideNav from '@/components/SideNav/sideNav';
import defaultImg from '@/assets/images/mouse.png';

const directData = [
  {
    selectedChatBox: 'chat001',
    username: 'ngot_303',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    selectedChatBox: 'chat002',
    username: 'ngot_304',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      time: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    selectedChatBox: 'chat003',
    username: 'ngot_306',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    selectedChatBox: 'chat004',
    username: 'ngot_309',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
];

export default function Direct() {
  const [selectedChatBox, setSelectedChatBox] = useState();
  useEffect(() => {
    console.log(selectedChatBox);
  }, [selectedChatBox]);
  return (
    <>
      <SideNav />
      <div className={styles.directContainer}>
        <div className={styles.directSideBar}>
          <div className={styles.directHeader}>
            <h2 className={styles.username}>ngot_303</h2>
            <i>
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ fontSize: '20px' }}
              />
            </i>
          </div>
          <div className={styles.directList}>
            <div className={styles.directTitle}>
              <h4>Messages</h4>
              <h4>Requests</h4>
            </div>

            {directData.map((item, i) => {
              return (
                <DirectItem
                  directItem={item}
                  setSelectedChatBox={setSelectedChatBox}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.directBoxContainer}>
          <DirectBox chatBox={selectedChatBox} />
        </div>
      </div>
    </>
  );
}

function DirectItem({ directItem, setSelectedChatBox }) {
  dayjs.extend(relativeTime);
  return (
    <>
      <div
        className={styles.directItem}
        onClick={() => setSelectedChatBox(directItem)}
      >
        <Image src={directItem.avatar || defaultImg} alt="user avatar" />
        <div>
          <h4>{directItem.username || 'username'}</h4>
          <div>
            <p>
              {directItem.lastMessage.type === 'text'
                ? directItem.lastMessage.content
                : 'image'}
            </p>
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '3px' }} />
            <p>{dayjs(directItem.lastMessage.createdAt).fromNow(true)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
