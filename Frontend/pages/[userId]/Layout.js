import styles from '../../styles/module.css/allPages/app_pages.module.css';
import pageStyles from '../../styles/module.css/components.module.css';
export default function FacilityLayout({ children, page_name}) {
    return (
        <section id={pageStyles.PageLayout}>
            {/*
                {page_name && (<h2>{page_name}</h2>)}
            */}
            <div id={styles.thePage} className={page_name!=='Dashboard' && page_name!=='Vehicle Details'? styles.thePage : ''}>
                {children}
            </div>
        </section>
    );
};