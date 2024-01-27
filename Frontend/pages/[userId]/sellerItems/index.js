import { useState } from 'react';
import styles from '../../../styles/module.css/allPages/app_pages.module.css';
import Layout from './Layout';
import TheItemContainer from '../categories/theItem';
import ItemsContainer from '../categories/items';
import SoldItems from './soldItems.js';
import InStock from './instock';

const Home = ({ appData , userId}) => {
    const allItems = appData?.items
    const soldItems = allItems?.filter(item=> item?.status === 'sold').slice(0,4)
    const in_stockItems = allItems?.filter(item=> item?.status === 'In Stock').slice(0,4)
    const [selectedItem, setSelectedItem] = useState(null)
    const reduceItems = soldItems?.slice(0,3)
    return (
        <Layout userId={userId} main_page = 'true' page_name = 'Categories'>
            <div className={`${styles.page} ${styles.index}`}>
                {
                    selectedItem?(
                        <>
                            <TheItemContainer selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                            <p>Similar items</p>
                            <ItemsContainer theItemsData={reduceItems} setSelectedItem={setSelectedItem}
                                selectedItem={selectedItem}
                            />
                        </>
                    ):(
                        <>
                            <h4 style={{textAlign: 'left', color:'black'}}>Sold items</h4>
                            {
                                soldItems && soldItems.length > 0?(
                                    <SoldItems theItemsData={soldItems} setSelectedItem={setSelectedItem}
                                    selectedItem={selectedItem}
                                    allItems={allItems}
                                />
                                ):(
                                    <p>Your folder is empty</p>
                                )
                            }
                            <h4 style={{textAlign: 'left', color:'black', marginTop:'15px'}}>Not sold</h4>
                            {
                                in_stockItems && in_stockItems.length > 0?(
                                    <InStock theItemsData={in_stockItems} setSelectedItem={setSelectedItem}
                                    selectedItem={selectedItem} allItems={allItems}
                                />
                                ):(
                                    <p>Your folder is empty</p>
                                )
                            }
                        </>
                    )
                }
            </div>
        </Layout>
    );
};

export default Home;
