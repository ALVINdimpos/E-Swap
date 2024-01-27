// nav.js
import styles from '../../../styles/module.css/allPages/categories.module.css';
import React from 'react';
import Image from 'next/image';
import PageHeadLayout from '../../../components/pages/pageHead';
import HomeImage from '../../../assets/images/categories/home.png';
import PhonesImage from '../../../assets/images/categories/phones.png';
import DesktopImage from '../../../assets/images/categories/desktop.png';
import OtherImage from '../../../assets/images/categories/other.jpg';
const Nav = ({navData, setCategory, selectedCategory, setSelectedItem}) => {

    const category_images = {
        'Home': HomeImage,
        'phones': PhonesImage,
        'desktop': DesktopImage,
    }    
    const the_items = navData
    const handleNav = (theCategory)=>{
        setCategory(theCategory)
        setSelectedItem(null)
    }
    const returnCard = (key, dict) =>{
        return(
            <div 
                className={styles.card} onClick={()=>handleNav(dict.name)}
                style={{
                    fontWeight:selectedCategory === dict.name? 'bold': 'normal'
                }}
            >
                <div className={styles.top}>
                    <Image src={category_images[dict.name] ? category_images[dict.name] : OtherImage} alt={dict.name} width={40} height={40}/>
                </div>
                <div className={styles.bottom}>
                    <p>{dict.name}</p>
                </div>
            </div>
        )
    }
    return (
        <PageHeadLayout>
            <div className={styles.CatHeader}>
                {
                    the_items &&
                    Object?.keys(the_items).map(key=>(
                        returnCard(key, the_items[key])
                    ))
                }
            </div>
        </PageHeadLayout>
    );
};

export default Nav;
