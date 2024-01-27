// theItems.js
import styles from '../../../../styles/module.css/allPages/categories.module.css';
import React from 'react';
import Image from 'next/image';
const WishList = ({row2Data}) => {
    const the_items = row2Data

    const returnCard = (item, index) =>{
        return(
            <div className={`${styles.card} ${styles.wishlist}`}key={index} onClick={()=>handleselected(item)}>
                <section >
                    <Image src={item?.image} alt={item?.name} width={40} height={40}/>
                    <p style={{item:'bold'}}>{item?.amount} rwf</p>
                </section>
            </div>
        )
    }
    return (
        <div className={styles.containerGrid}>
            {
                the_items.map((item, index)=>(
                    returnCard(item, index)
                ))
            }
        </div>
    );
};

export default WishList;
