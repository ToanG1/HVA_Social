import styles from './page.module.scss';
import Link from 'next/link';

import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>HVA Social Media</h2>
        <p>Sign up to see meaningful study shares from your friends.</p>
        <a id={styles.facebookLogin} href="#">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ width: '15px', paddingRight: '8px' }}
          />
          Log in with Facebook
        </a>
        <div>
          <p className={styles.divider}></p>
          <span> OR </span>
          <p className={styles.divider}></p>
        </div>
        <form>
          <input type="text" placeholder="Phone Number or Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <a>Learn More</a>
          </p>
          <p>
            By signing up, you agree to our{' '}
            <a>Terms , Privacy Policy and Cookies Policy .</a>
          </p>
          <button>Log in</button>
        </form>
      </div>

      <div className={styles.formBox}>
        <span>
          Have an account? <Link href="/login">Log in</Link>
        </span>
      </div>

      <div className={styles.loginFooter}>
        <p>© 2024 HVA. All rights reserved.</p>
      </div>
    </div>
  );
}
