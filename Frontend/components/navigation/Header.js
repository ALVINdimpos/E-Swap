import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/module.css/Header.module.css';
import { menuPages } from './page_links';

const Header = ({userDetails, setUserDetails, userId, currentPage}) => {
  const router = useRouter()
  const userType = userDetails?.type || 'buyer'
  const sidebar_pages =  menuPages[userType]
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleLogout = () =>{
    localStorage.setItem('logged_ECOSWAP_user', JSON.stringify(null));
    setUserDetails(null)
  }
  const the_link = (link) => `/${userId}/${link}`

  return (
    <nav id={styles.mainNav} className={sidebarOpen? styles.openSidebar: ''}>
      <div className={styles.theHeader}>
        <div className={styles.pageName}>
          <h4>{currentPage}</h4>
        </div>
        <div type='submit' onClick={toggleSidebar} className={styles.toggleSidebar}> 
          <i className='fa fa-bars'></i>
        </div>
      </div>
      <ul className={styles.dropdown} style={sidebarOpen ? {} : { display: 'none' }}>
        {userDetails && (
          <>
          {sidebar_pages.map((page) => (
            <li key={page.path} className={styles.submenu} onClick={() => page.name === 'Logout' ? handleLogout() : null}>
              <a href={page.name === 'Logout' ? '' : the_link(page.path)} className={styles.left}>
                {page.linkText}
              </a>
              <span className={styles.right}>
                <i className={page.icon}></i>
              </span>
            </li>
          ))}
          
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
