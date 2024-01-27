import React from 'react';
import AuthLayout from './layout';
import styles from '../../styles/module.css/authenticate.module.css';
import pagestyles from '../../styles/module.css/components.module.css';
const LoadingPage = () => {

  return (
    <AuthLayout loader={'true'} page = 'load'>
      <form id={styles.login}>
        <div id={styles.loading_container}>
          <div className={`${pagestyles.logoimg} ${styles.loading_image}`}>
              <span className={pagestyles.logo}>
                  SWAP-<b className={pagestyles.colored}>e</b>
                </span>
          </div>
          <p>Loading ...</p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoadingPage;
