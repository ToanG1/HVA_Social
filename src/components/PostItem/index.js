import styles from './index.module.scss';
import Image from 'next/image';
import decorImage from '@/assets/images/rosé.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faEllipsis,
  faShare,
  faSplotch,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

export function PostItem() {
  return (
    <div className={styles.postItemContainer}>
      <div className={styles.postItemHeader}>
        <Image src={decorImage} alt="Avatar" />
        <div>
          <div>
            <span style={{ fontWeight: '750' }}>
              rose_are_rosie
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  fontSize: '10px',
                  marginLeft: '5px',
                  marginBottom: '1px',
                  color: '#0095f6',
                }}
              />
            </span>
            <FontAwesomeIcon
              icon={faCircle}
              style={{ fontSize: '3px', margin: '0px 5px', color: 'gray' }}
            />
            <span style={{ color: 'gray' }}>2 w</span>
            <FontAwesomeIcon
              icon={faCircle}
              style={{ fontSize: '3px', margin: '0px 5px', color: 'gray' }}
            />
            <span className={styles.bluetext}>Follow</span>
          </div>
          <div>
            <span>hikingwithmary</span>
            <FontAwesomeIcon
              icon={faCircle}
              style={{ fontSize: '3px', margin: '0px 5px' }}
            />
            <span>Can't Catch Me Now</span>
          </div>
        </div>
        <button>
          <FontAwesomeIcon icon={faEllipsis} style={{ fontSize: '17px' }} />
        </button>
      </div>
      <div className={styles.postItemBody}>
        <Image
          src={decorImage}
          alt="Post image"
          style={{ marginBottom: '15px' }}
        />
        <div>
          <button
            style={{
              marginBottom: '10px',
              marginRight: '7px',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: '25px',
                marginRight: '10px',
              }}
            />
          </button>
          <button
            style={{
              marginBottom: '10px',
              marginRight: '7px',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <FontAwesomeIcon
              icon={faComment}
              style={{
                fontSize: '25px',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            />
          </button>
          <button
            style={{
              marginBottom: '10px',
              marginRight: '342px',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <FontAwesomeIcon
              icon={faShare}
              style={{
                fontSize: '25px',
                marginLeft: '10px',
              }}
            />
          </button>
          <button
            style={{
              marginBottom: '10px',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <FontAwesomeIcon
              icon={faSplotch}
              style={{
                fontSize: '25px',
              }}
            />
          </button>
        </div>
        <span style={{ fontWeight: '750' }}>912.126 likes</span>
        <div>
          <span style={{ fontWeight: '750' }}>
            rose_are_rosie{' '}
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                fontSize: '10px',
                marginLeft: '5px',
                marginBottom: '1px',
                color: '#0095f6',
              }}
            />
          </span>
          <p>
            Here's my secret of how I get to look super clean! I use a lighter
            and singe all of the yarn fuzzies off.
          </p>
        </div>
      </div>
    </div>
  );
}
