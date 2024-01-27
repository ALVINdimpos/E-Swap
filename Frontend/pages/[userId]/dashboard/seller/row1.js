// Row1.js
import styles from '../../../../styles/module.css/allPages/Dash_Content.module.css';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

const Row1 = ({row1Data}) => {

    const the_items = row1Data
    const returnCard = (key, dict) =>{
        return(
            <div className={styles.card}>
                <article >
                    <Image src={dict.image} alt={dict.name} width={40} height={40}/>
                </article>
                <aside>
                    <p>{dict.name}</p>
                    <p>{dict.amount} rwf</p>
                </aside>
            </div>
        )
    }
    return (
        <div className={styles.row2}>
            {
                the_items && 
                Object.keys(the_items).map(key=>(
                    returnCard(key, the_items[key])
                ))
            }
        </div>
    );
};

export default Row1;
