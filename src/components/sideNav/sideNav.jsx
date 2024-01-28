'use client';
import styles from './SideNav.module.scss';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCompass,
  faHeart,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';
import defaultImg from '../../assets/images/mouse.png';

export default function SideNav() {
  return (
    <div className={styles.sideNav_container}>
      <h2>HVA Social</h2>
      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} style={{ fontSize: '28px' }} />
            Home
          </Link>
        </li>
        <li>
          <Link href="/explore">
            <FontAwesomeIcon icon={faCompass} style={{ fontSize: '28px' }} />
            Explore
          </Link>
        </li>
        <li>
          <Link href="/">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: '28px' }}
            />
            Search
          </Link>
        </li>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHeart} style={{ fontSize: '28px' }} />
            Notifications
          </Link>
        </li>
        <li>
          <Link href="/direct">
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              style={{ fontSize: '28px' }}
            />
            Messages
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: '28px' }} />
          Create
        </li>
        <li>
          <Link href="/profile">
            <Image src={defaultImg} alt="profile" />
            Profile
          </Link>
        </li>
      </ul>
      <button>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '26px' }} />
        More
      </button>
    </div>
  );
}
