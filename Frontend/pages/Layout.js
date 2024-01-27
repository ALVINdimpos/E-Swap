import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/navigation/Header';
import styles from '../styles/module.css/App.module.css';
import Footer from '../components/navigation/footer';
import { FooterPages } from '../components/navigation/page_links';
export default function AppLayout({ searchCall, children, userDetails, setUserDetails, userId, currentPage, setCurrentPage }) {
  const router = useRouter();
  const { pathname } = useRouter();
  const [authPage, setAuthPage] = useState(false);

  useEffect(() => {
    setAuthPage(pathname === '/'||pathname===''||pathname.endsWith('login')||pathname.endsWith('signup'));
  }, [pathname]);

  useEffect(() => {
    if (pathname.endsWith('/')) {
      router.push(pathname.slice(0, -1));
    }
  }, [pathname]);
  useEffect(() => {
    if (userDetails) {
      const userType = userDetails?.type
      const the_pathname = pathname.split('/')[pathname.split('/').length - 1]
      console.log('userType: ', userType)
      console.log('FooterPages: ', FooterPages[userType])
      console.log('pathname: ', the_pathname)
      const page = FooterPages?.[userType]?.find(page => page?.path === `/${the_pathname}`)
      console.log('page: ', page)
      const page_name = page?.['name'] || 'Home'
      console.log('page_name: ', page_name)
      if (page_name !== currentPage) {
        setCurrentPage(page_name)
      }
    }
  }, [pathname, userDetails, currentPage])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>EcoSWAP</title>
      </Head>
      <section id={styles.App}>
        <div className={styles.theApp}>
          {!authPage && !searchCall && (
            userDetails ? (
              <header className={styles.header} >
                <Header userDetails={userDetails} setUserDetails={setUserDetails} userId={userId}
                  currentPage={currentPage}
                />
              </header>
            ) : <></>
          )}
          <article className={`${styles.page_wrapper} ${authPage || searchCall ? styles.auth : ''} `} >
            {children}
          </article>
          {
            !authPage && !searchCall && (
              userDetails ? (
                <header className={styles.header} >
                  <Footer userId={userId} userDetails={userDetails}
                    currentPage={currentPage} setCurrentPage={setCurrentPage}
                  />
                </header>
              ) : <></>
            )
          }
        </div>
      </section>
    </>
  );
}
