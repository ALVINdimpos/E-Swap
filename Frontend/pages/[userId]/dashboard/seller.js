// SellerDashboard.js
import styles from '../../../styles/module.css/allPages/Dashboard.module.css';
import React from 'react';
import Row1 from './seller/row1';
import Row2 from './seller/row2';
import DashHead from './seller/dashHead';

const SellerDashboard = ({appData, changeSearchPage, userId}) => {
    const row1Data = appData?.items?.slice(0,6)
    const row2Data = appData?.items?.slice(0,6)
    console.log('this is seller dashboard')
    return (
        <>
            <DashHead changeSearchPage={changeSearchPage} userId={userId}/>
            <div id={styles.content} className={styles.seller}>
                <div className={styles.a_row} style={{marginTop:'10px !important'}}>
                    <div className={styles.head}>
                    <article style={{width:'50%'}}><h2>User Requests</h2></article>
                    <aside style={{width:'50%', textAlign:'right'}}><i>See All</i></aside>
                    </div>
                    <Row1 row1Data={row1Data}/>
                </div>
                <div className={styles.a_row}>
                    <div className={styles.head}>
                    <article style={{width:'50%'}}><h2>Recently Sold Items</h2></article>
                    <aside style={{width:'50%', textAlign:'right'}}><i>See All</i></aside>
                    </div>
                    <Row2 row2Data ={row2Data}/>
                </div>
            </div>
        </>
    );
};

export default SellerDashboard;
