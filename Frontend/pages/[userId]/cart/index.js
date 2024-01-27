import { useState } from 'react';
import styles from '../../../styles/module.css/allPages/app_pages.module.css';
import Layout from './Layout';
import TheItemContainer from '../categories/theItem';
import Cart from './cart';
import WishList from './wishlist';
import ItemsContainer from '../categories/items';

const Home = ({ appData , userId}) => {
    const allItems = appData?.items
    const cartItems = appData?.cart.slice(0,2)
    const wishlistItems = appData?.wishlist.slice(0,5)
    const [selectedItem, setSelectedItem] = useState(null)
    const reduceItems = cartItems?.slice(0,3)
    return (
        <Layout userId={userId} main_page = 'true' page_name = 'Categories'>
            <div className={`${styles.page} ${styles.index}`}>
                {
                    cartItems && cartItems?.length > 0?(
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
                                <h4 style={{textAlign: 'left', color:'black'}}>Cart</h4>
                                {
                                    cartItems && cartItems.length > 0?(
                                        <Cart theItemsData={cartItems} setSelectedItem={setSelectedItem}
                                        selectedItem={selectedItem}
                                        allItems={allItems}
                                    />
                                    ):(
                                        <p>Your cart is empty</p>
                                    )
                                }
                                <h4 style={{textAlign: 'left', color:'black', marginTop:'15px'}}>WishList</h4>
                                {
                                    wishlistItems && wishlistItems.length > 0?(
                                        <WishList theItemsData={wishlistItems} setSelectedItem={setSelectedItem}
                                        selectedItem={selectedItem} allItems={allItems}
                                    />
                                    ):(
                                        <p>Your wishlist is empty</p>
                                    )
                                }
                            </>
                        )
                    ):(
                        <p>No available items</p>
                    )
                }
            </div>
        </Layout>
    );
};

export default Home;
