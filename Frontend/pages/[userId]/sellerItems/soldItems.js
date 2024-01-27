// theItems.js
import styles from '../../../styles/module.css/allPages/categories.module.css';
import React from 'react';
import { setLocalStorageProp_ } from '../../../components/localStorage';
import Image from 'next/image';
const SoldItems = ({theItemsData, setSelectedItem, allItems}) => {
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
            <div className={styles.card} key={index} onClick={() => handleselected(item)}>
            <article>
              <Image src={item.image} alt={item.name} width={40} height={40} />
            </article>
            <aside>
              <p>{the_item.name}</p>
              <p>{the_item.amount} rwf</p>
              <div>
                <p className={styles.chat}>Relist</p>
                <p className={styles.shoppingCart}></p>
                <p className={styles.wishlist}>Remove </p>
              </div>
            </aside>
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

export default SoldItems;
