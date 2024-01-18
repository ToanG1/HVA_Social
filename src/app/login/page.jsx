import styles from './page.module.scss';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>HVA Social Media</h2>
        <form>
          <input type="text" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
        <div>
          <p className={styles.divider}></p>
          <span> OR </span>
          <p className={styles.divider}></p>
        </div>
        <div className={styles.socialLogin}>
          <a id={styles.facebookLogin} href="#">
            Log in with Facebook
          </a>
          <Link href="/forgot-pwd">Forgot password?</Link>
        </div>
      </div>

      <div className={styles.formBox}>
        <p>
          Don not have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>

      <div className={styles.loginFooter}>
        <p>© 2024 HVA. All rights reserved.</p>
      </div>
    </div>
  );
}
