import { useEffect, useState } from 'react';
import styles from '../../../styles/module.css/allPages/app_pages.module.css';
import componentStyles from '../../../styles/module.css/components.module.css';
import { useRouter } from 'next/router';
import Layout from './Layout';

const Profile = ({ userType , userId}) => {
    return (
        <Layout add_route = '/bookings/add' main_page = 'true' page_name = 'Bookings List'>

        </Layout>
    );
};

export default Profile;
