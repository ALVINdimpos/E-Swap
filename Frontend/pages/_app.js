import styles from '../styles/module.css/App.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css';
import AppLayout from './Layout';
import { getUserFromLocalStorage } from '../components/localStorage';
import { backendhost } from '../components/navigation/routes';
import { startComponents_ } from '../components/some_components';
import LoadingPage from './auth/load';
import SearchPage from '../components/pages/search';
import { fetchData } from '../components/data/handleData';

function App({ Component, pageProps }) {

  const [currentPage, setCurrentPage] = useState(null);
  const starting_Components = startComponents_()
  const router = useRouter()
  const { pathname } = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [userId, setUserID] = useState(null);
  const [appData, setappData] = useState(starting_Components)
  const [missingData, setMissing] = useState(true)
  useEffect(() => {
    const theUser = getUserFromLocalStorage('logged_ECOSWAP_user');
    if (!theUser && pathname!=='/'&&pathname!=='' && !pathname.endsWith('login') && !pathname.endsWith('signup')) {
      router.push('/');
    } else {
      if (!userDetails && theUser) {
        setUserDetails(theUser);
        setUserID(theUser._id);
      }
    }
  }, [pathname, userDetails, router]);

  useEffect(() => {
    if (missingData && userId) {
      //const fetchedData = fetchData()
      const fetchedData = starting_Components
      if (fetchedData) {
        setappData(fetchedData);
        setMissing(false);
      } else {
        setappData(null);
        setMissing(true);
      }
    }
  }, [missingData, userId]);

  const [searchCall, setSearchCall] = useState(false)
  const changeSearchPage = () => {
    setSearchCall(!searchCall)
  }
  return (
    <AppLayout searchCall={searchCall}
      userDetails={userDetails}
      userId={userId}
      setUserDetails={setUserDetails}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      <section className={styles.content}>
        {pathname === '' || pathname === '/' || pathname.endsWith('login') || pathname.endsWith('signup')? (
          <Component
            {...pageProps}
            backendhost={backendhost}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setUserID={setUserID}
            userId={userId}
          />
        ) : (
          <>
            {missingData ? (
              <>
                {LoadingPage()}
              </>
            ) : (
              searchCall ? (
                <SearchPage changeSearchPage={changeSearchPage} />
              ) : (
                <Component
                  {...pageProps}
                  backendhost={backendhost}
                  userDetails={userDetails}
                  userId={userId}
                  appData={appData}
                  changeSearchPage={changeSearchPage}
                />
              )
            )}
          </>
        )}
      </section>
    </AppLayout>
  );

}

export default App;
