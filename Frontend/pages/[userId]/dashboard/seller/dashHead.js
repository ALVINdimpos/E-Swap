// DashHead component
import { useState, useEffect } from 'react';
import PageHeadLayout from '../../../../components/pages/pageHead';
import styles from '../../../../styles/module.css/allPages/DashHead.module.css';
import { useRouter } from 'next/router';
import {AppPages} from '../../../../components/navigation/page_links' ;
const DashHead = ({changeSearchPage, userId}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(contents).length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeIndex();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contents = {
    newly_added: { heading: 'Join the E-Waste Revolution', subheading: 'Start Selling >>' },
    most_bought_category :{ heading: 'Contribute to a Greener Rwanda and earn Rewards', subheading: 'Get Started >>'},
  };
  const router = useRouter()
  const go_sell = ()=>{
    router.push(`${userId}/${AppPages.find(page=>page.name === 'My Items').push}`)
  }
  return (
    <PageHeadLayout>
      <div id={styles.DashHead}>
        <div className={styles.searchHolder}>
          <input id={styles.searchBar} type="text" placeholder="Q mouse" onClick={() => changeSearchPage(false)} />
          <div id={styles.message} /> 
        </div>
        <div className={styles.contentsWrapper}>
          {Object.entries(contents).map(([key, content], index) => {
            console.log(key,': ', content.image)
            return(
              <div key={key}
                className={`${styles.contentsContainer} ${index === currentIndex ? styles.current : ''}`}
                onClick={()=>go_sell()}
              >
                <div className={styles.content} style={{top:'-10 !important', marginTop: '-10 !important'}}>
                  <h2>{content.heading}</h2>
                  <p>{content.subheading}</p>
                </div>
              </div>
            )}
          )}

          <div className={styles.circlesWrapper}>
          {Object.keys(contents).map((key, index) => (
            <div
              key={key}
              className={`${styles.circle} ${index === currentIndex ? styles.currentCircle : ''}`}
            />
          ))}
          </div>
        </div>

      </div>
    </PageHeadLayout>
  );
  
};

export default DashHead