import { useRouter } from 'next/router';
import styles from '../../styles/module.css/footer.module.css';
import { FooterPages } from './page_links';
import React from 'react';

const Footer = ({ userDetails, userId, currentPage, setCurrentPage }) => {
  const router = useRouter()
  const userType = userDetails?.type
  const thePages = FooterPages[userType]
  const the_link = (link) => `/${userId}/${link}`
  const changePage = (name, path) => {
    setCurrentPage(name)
    router.push(the_link(path))
  }
  return (
    <div id={styles.footer_inner}>
      {thePages.map((page) => (
        <div key={page.path} onClick={() => changePage(page.name, page.path)}
          className={`${styles.menuItem} ${currentPage === page.name ? styles.active : ''}`}>
          <a>
            {
              currentPage === page.name ?
                (
                  <>
                    <div className={styles.icon}><i className={page.icon}></i></div>
                    <div className={styles.name}>{page.linkText}</div>
                  </>
                ) :
                (
                  <i className={page.icon}></i>
                )
            }
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
