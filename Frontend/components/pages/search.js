import React from 'react';
import styles from '../../styles/module.css/authenticate.module.css';
import pagestyles from '../../styles/module.css/components.module.css';

export default function SearchPage({changeSearchPage}) {

  const handleSearchButtonClick = () => {
  };
  return (
    <section id={styles.authenticate} className={styles.loader}>
      <div className={pagestyles.searchPage}>
        <div className={pagestyles.head}>
        
        <button onClick={() => changeSearchPage()}><i class='fas fa-arrow-left'></i></button>
        <input type="text" placeholder="Search..." />
        <button onClick={() => handleSearchButtonClick()}>Search</button>
        </div>
      </div>
    </section>
  );


}
