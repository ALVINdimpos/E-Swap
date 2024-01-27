// Row1.js
import styles from '../../../../styles/module.css/allPages/Dash_Content.module.css';
import React from 'react';
import Image from 'next/image';
import HomeImage from '../../../../assets/images/categories/home.png';
import PhonesImage from '../../../../assets/images/categories/phones.png';
import DesktopImage from '../../../../assets/images/categories/desktop.png';
import OtherImage from '../../../../assets/images/categories/other.jpg';
const Row1 = ({row1Data}) => {
    const the_items = row1Data
    const category_images = {
        Home: HomeImage,
        Phones: PhonesImage,
        Computers: DesktopImage,
    }    
    //const the_categories = ['Home', 'Phones','Tablets', 'Computers','TVs', 'Audio','Camera', 'Other']
    const returnImage = (name)=>{
        console.log(name, ', the image: ', category_images[name])
        return(
            <Image src={category_images?.[name] ? category_images?.[name] : OtherImage} alt={name} width={40} height={40}/>
        )
    }
    const returnCard = (key, dict) =>{
        return(
            <div className={styles.card} key={key}>
                <div className={styles.top}>
                    {returnImage(dict.name)}
                </div>
                <div className={styles.bottom}>
                    <p>{dict.name}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.row1}>
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
