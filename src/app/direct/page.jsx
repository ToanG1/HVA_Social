import styles from './page.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import SideNav from '@/components/SideNav/sideNav';
import defaultImg from '@/assets/images/mouse.png';

const directData = [
  {
    username: 'ngot_303',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    username: 'ngot_303',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      time: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    username: 'ngot_303',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
  {
    username: 'ngot_303',
    avatar: defaultImg,
    lastMessage: {
      type: 'text',
      content: 'Hello',
      createdAt: '2024-01-21T13:55:23.366+00:00',
    },
  },
];

export default function Direct() {
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
              return <DirectItem userInfo={item} key={i} />;
            })}
          </div>
        </div>
        <div className={styles.directBox}></div>
      </div>
    </>
  );
}

function DirectItem({ userInfo }) {
  dayjs.extend(relativeTime);
  return (
    <>
      <div className={styles.directItem}>
        <Image src={userInfo.avatar || defaultImg} alt="user avatar" />
        <div>
          <h4>{userInfo.username || 'username'}</h4>
          <div>
            <p>
              {userInfo.lastMessage.type === 'text'
                ? userInfo.lastMessage.content
                : 'image'}
            </p>
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '3px' }} />
            <p>{dayjs(userInfo.lastMessage.createdAt).fromNow(true)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
