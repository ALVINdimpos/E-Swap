import React from 'react';
import styles from '../../styles/module.css/authenticate.module.css';
import pagestyles from '../../styles/module.css/components.module.css';

export default function AuthLayout({ children, loader, page}) {
  return (
    <section id={styles.authenticate} className={loader?styles.loader:''}>
      {(!loader && page === 'login') || page === 'land'&&(
        <div className={pagestyles.logoimg}>
          <span className={pagestyles.logo}>
            eco<b className={pagestyles.colored}>SWAP</b>
          </span>
        </div>
      )}
      <h1>{page=='login'? 'LOGIN' : page=='signup'? 'REGISTER':''}</h1>
      {children}
    </section>
  );
}
