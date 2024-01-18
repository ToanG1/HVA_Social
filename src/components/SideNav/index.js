import styles from './index.module.scss';

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

export function SideNav() {
  return (
    <div className={styles.sideNav_container}>
      <h2>HVA Social</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} style={{ width: '18px' }} /> Home
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} style={{ width: '18px' }} />
          Explore
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '18px' }} />
          Search
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} style={{ width: '18px' }} />
          Notifications
        </li>
        <li>
          <FontAwesomeIcon
            icon={faFacebookMessenger}
            style={{ width: '18px' }}
          />
          Messages
        </li>
        <li>
          <FontAwesomeIcon icon={faSquarePlus} style={{ width: '18px' }} />
          Create
        </li>
        <li>Profile</li>
      </ul>

      <button>
        <FontAwesomeIcon icon={faBars} style={{ width: '18px' }} />
        More
      </button>
    </div>
  );
}
