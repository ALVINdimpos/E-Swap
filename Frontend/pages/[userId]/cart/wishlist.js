// theItems.js
import styles from '../../../styles/module.css/allPages/categories.module.css';
import React from 'react';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import Image from 'next/image';
const WishList = ({theItemsData, setSelectedItem, allItems}) => {
    const the_items = theItemsData
    const handleselected = (item)=>{
        setLocalStorageProp_('selecteditem', item)
        setSelectedItem(item)
        console.log('clicked')
        console.log('item:', item)
    }
    const returnCard = (item, index) =>{
        const the_item = allItems.find(this_=> this_._id=== item._id)
        console.log('item: ', item)
        console.log('allItems: ', allItems)
        console.log('matbcing: ', the_item)
        return(
            <div className={`${styles.card} ${styles.wishlist}`}key={index} onClick={()=>handleselected(item)}>
                <section >
                    <Image src={the_item.image} alt={the_item.name} width={40} height={40}/>
                    <p style={{fontWeight:'bold'}}>{the_item.amount} rwf</p>
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
