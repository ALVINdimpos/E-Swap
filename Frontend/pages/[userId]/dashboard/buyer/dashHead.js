// DashHead component
import { useState, useEffect } from 'react';
import PageHeadLayout from '../../../../components/pages/pageHead';
import styles from '../../../../styles/module.css/allPages/DashHead.module.css';

const DashHead = ({changeSearchPage}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(contents).length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeIndex();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const contents = {
    most_bought_category: { heading: 'Transform E-Waste into Tech Treasures', subheading: 'Start Crafting >>'},
    newly_added: { heading: 'Make a Difference: Buy Second-Hand, Combat E-Waste', subheading: 'Check items >>' },
    eco_swap_choosing: { heading: 'Green Crafting: Transform E-Waste into Your Next Tech', subheading: 'Check items >>'},
  };
  
  return (
    <PageHeadLayout>
      <div id={styles.DashHead}>
        <div className={styles.searchHolder}>
          <input id={styles.searchBar} type="text" placeholder="Q mouse" onClick={() => changeSearchPage(false)} />
          <div id={styles.message} /> 
        </div>
        <div className={styles.contentsWrapper}>
          {Object.entries(contents).map(([key, content], index) => {
            //console.log(key,': ', content.image)
            return(
              <div key={key}
                className={`${styles.contentsContainer} ${index === currentIndex ? styles.current : ''}`}
              >
                <div className={styles.content}>
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